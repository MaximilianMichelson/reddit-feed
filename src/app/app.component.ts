import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { HttpService } from './http-service/http-service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadCommentsService } from './services/read-comments.service';
import { GlobalService } from './services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditTableComponent implements OnInit {

  // The next pagination page (the value "after" recieved from the reddit API)
  private _next: string;

  // Paginator default and available page sizes
  public pageSize: number;
  public pageSizeOptions: number[];

  // State keeper for paginaton
  private _arrayOfPaginatorNavigationObjects: PaginatorNavigationObject[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Columns to render in the mat-table
  private _displayedColumns: string[];

  // Cell data for the mat-table
  private _dataSource: MatTableDataSource<RedditItem>;

  // Form for subreddit to get posts from
  private _subredditFormGroup: FormGroup;

  constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _readCommentsService: ReadCommentsService,
    private readonly _globals: GlobalService,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25];

    this._arrayOfPaginatorNavigationObjects = [];

    this._subredditFormGroup = new FormGroup({
      subreddit: new FormControl('sweden')
    });

    this._displayedColumns = ['index', 'thumbnail', 'created', 'num_comments', 'author', 'score', 'permalink', 'title', 'comments'];
    this._dataSource = new MatTableDataSource();

    this._globals.currentSubreddit = this.subredditFormGroup.controls.subreddit.value;

    this._dataSource.paginator = this.paginator;
    this._dataSource.paginator._intl.itemsPerPageLabel = 'Page Size';
    this._dataSource.paginator._intl.nextPageLabel = 'Next';
    this._dataSource.paginator._intl.previousPageLabel = 'Previous';
    this._dataSource.paginator.length = 25;

    this._dataSource.paginator.hasNextPage = () => true;
    this._dataSource.paginator.hasPreviousPage = () => this.hasPrev();

    this.getFeed();
  }

  hasPrev(): boolean {
    return this._arrayOfPaginatorNavigationObjects.length > 0 || this._dataSource.paginator.pageIndex > 0 && this._arrayOfPaginatorNavigationObjects.length === 0;
  }

  /**
   * When clicking on a row in the mat-table
   * @param row 
   */
  onRowSelected(row: TableRow): void {
    this._dialog.open(SelectedRowDialogComponent, {
      data: {
        created: row.created,
        comments: row.num_comments,
        selftext: row.selftext,
        title: row.title,
        author: row.author,
        score: row.score,
        permalink: row.permalink,
        url: row.url,
        id: row.id
      }
    });
  }

  /**
   * When the "read comments" button in the mat-table is pressed.
   * Opens a new dialog with the comments
   * @param id The id of the post to get comments from
   */
  onReadComments(id: string): void {
    this._readCommentsService.readComments(id);
  }

  /**
   * When the "change subreddit" button is pressed
   * @param newSubreddit Subreddit to get data from
   */
  onSubredditChange(newSubreddit: string): void {

    // Subreddits are in lowercase, transform input before getting the feed
    this._globals.currentSubreddit = newSubreddit.toLowerCase();
    this.getFeed();
  }

  /**
   * Triggered when doing actions on mat-paginator
   * @param event 
   */
  paginatorPageChange(event: PaginatorEvent) {

    // Page size changed
    if (event.pageSize !== this.pageSize) {

      // Save new page size
      this.pageSize = event.pageSize;

      // Reload the current server side page
      this._arrayOfPaginatorNavigationObjects.length > 0
        ?
        this.getFeed(this._arrayOfPaginatorNavigationObjects[this._arrayOfPaginatorNavigationObjects.length - 1].after)
        :
        this.getFeed();

      return;
    }

    // "Previous" pressed on paginator when on the first client page for the current server page
    if (event.pageIndex === event.previousPageIndex) {

      // Dont do anything if already on first page
      if (this._arrayOfPaginatorNavigationObjects.length === 0) {
        return;
      }

      // Remove the last state and go to previous server side page
      this.getFeed(this._arrayOfPaginatorNavigationObjects.pop().before);

      // Show last client side page without needing to fetch another server side page
      this._dataSource.paginator.pageIndex = Number.MAX_SAFE_INTEGER;

      // About to go out of paginator bounds, 
    } else if (event.pageIndex * this._dataSource.paginator.pageSize >= this._dataSource.paginator.length) {

      const before = this._arrayOfPaginatorNavigationObjects.length > 0
        ?
        this._arrayOfPaginatorNavigationObjects[this._arrayOfPaginatorNavigationObjects.length - 1].after
        :
        null;

      // Save State
      this._arrayOfPaginatorNavigationObjects.push({
        before,
        after: this._next
      });

      // Go forward 1 server side page
      this.getFeed(this._arrayOfPaginatorNavigationObjects[this._arrayOfPaginatorNavigationObjects.length - 1].after);
      this._dataSource.paginator.pageIndex = 0;
    }
  }

  /**
   * Populates the mat table with data from reddit
   * @param next Offsett
   */
  getFeed(after?: string): void {

    const q = after
      ?
      `${environment.SUBREDDIT_BASE_URL}${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&after=${after}`
      :
      `${environment.SUBREDDIT_BASE_URL}${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}`;

    this._httpService.getRequest(q)
      .pipe(
        map(
          (listing: RedditListing): RedditItem[] => {
            listing.data.children.forEach(element => {

              // element.data.created is unix timestamp and needs to be converted
              element.data.created = new Date(Number(element.data.created) * 1000).toLocaleDateString('sv-SV');

              element.data.permalink = `https://reddit.com/${element.data.permalink}`;
            });

            // Will be used when populating the PaginatorNavigation array on mat-paginator next
            this._next = listing.data.after;

            // Don't fetch the sticky posts, they break the paginator limits and stuff
            return listing.data.children.filter(v => v.data.stickied === false);
          }
        )
      )
      .subscribe(
        (redditItems) => {
          this._dataSource.data = redditItems;
        },
        _err => this._snackBar.open('Subreddit does not exist', 'OK', {
          duration: 5000
        })
      );
  }

  get subredditFormGroup(): FormGroup {
    return this._subredditFormGroup;
  }

  get dataSource(): MatTableDataSource<RedditItem> {
    return this._dataSource;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  /**
   * Returns a unix timestamp as a "time ago" string
   * @param unixTimestamp The timestamp to use
   */
  timeAgo(unixTimestamp: number): string {
    return this._globals.timeAgo(unixTimestamp * 1000);
  }

  /**
   * Places placeholder image when the original image is not found
   * @param event 
   */
  imageNotFound(event: { target: { src: string; }; }): void {
    event.target.src = '../assets/not_found.jpg';
  }

}

/**
 * The Feed from reddit.com
 */
interface RedditListing {
  data: {
    children: RedditItem[];
    after: string;
    before: string;
    current: string;
  };
}

/**
 * A Post on reddit
 */
interface RedditItem {
  data: {
    created: string;
    permalink: string;
    stickied: boolean;
  };
}

/**
 * A mat-table row containing data from reddit
 */
interface TableRow {
  selftext: string;
  created: Date;
  num_comments: number;
  title: string;
  author: string;
  score: number;
  permalink: string;
  url: string;
  id: string;
}

/**
 * Objects containing a paginator navigation state
 */
interface PaginatorNavigationObject {
  before: string;
  after: string;
}

/**
 * Event received from the paginator when its detecting changes
 */
interface PaginatorEvent {
  previousPageIndex: number,
  pageIndex: number,
  pageSize: number,
  length: number
}
