import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from './http-service/http-service';
import { RedditListing, RedditPost } from './models/reddit.model';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { GlobalService } from './services/global.service';
import { ReadCommentsService } from './services/read-comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditTableComponent implements OnInit {

  // Paginator settings
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  public pageSize: number;
  public pageSizeOptions: number[];
  public length: number;

  // The next pagination page (the value "after" recieved from the reddit API)
  private _next: string;

  // State keeper for paginaton
  private _arrayOfPaginatorNavigationObjects: PaginatorNavigationObject[];

  // Columns to render in the mat-table
  private _displayedColumns: string[];

  // Cell data for the mat-table
  private _dataSource: MatTableDataSource<RedditPost>;

  // Form for subreddit to get posts from
  private _subredditFormGroup: FormGroup;

  public constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _readCommentsService: ReadCommentsService,
    private readonly _globals: GlobalService,
    private readonly _snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {

    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25];
    this.length = 25;

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
    this._dataSource.paginator.length = this.length;

    // Override default "next" and "previous" to allow for server side pagination to be implemented
    this._dataSource.paginator.hasNextPage = () => true;
    this._dataSource.paginator.hasPreviousPage = () => this.hasPrev();

    this.getFeed();
  }

  /**
   * Disables "previous" button in mat-paginator when false
   */
  public hasPrev(): boolean {
    return this._arrayOfPaginatorNavigationObjects.length > 0 || this._dataSource.paginator.pageIndex > 0 && this._arrayOfPaginatorNavigationObjects.length === 0;
  }

  /**
   * When clicking on a row in the mat-table
   * @param row The clicked row
   */
  public onRowSelected(row: TableRow): void {
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
  public onReadComments(id: string): void {
    this._readCommentsService.readComments(id);
  }

  /**
   * When the "change subreddit" button is pressed
   * @param newSubreddit Subreddit to get data from
   */
  public onSubredditChange(newSubreddit: string): void {

    // Subreddits are in lowercase, transform input before getting the feed
    this._globals.currentSubreddit = newSubreddit.toLowerCase();
    this.getFeed();
  }

  /**
   * Triggered when doing actions on mat-paginator
   * @param event Event when paginator detects changes
   */
  public paginatorPageChange(event: PaginatorEvent) {

    // Page size changed
    if (event.pageSize !== this.pageSize) {

      // Save new page size
      this.pageSize = event.pageSize;

      // Reload the current server side page
      this._arrayOfPaginatorNavigationObjects.length > 0 ?
        this.getFeed(this._arrayOfPaginatorNavigationObjects[this._arrayOfPaginatorNavigationObjects.length - 1].after) :
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

      // About to go out of paginator bounds
    } else if (event.pageIndex * this._dataSource.paginator.pageSize >= this._dataSource.paginator.length) {

      const before = this._arrayOfPaginatorNavigationObjects.length > 0 ?
        this._arrayOfPaginatorNavigationObjects[this._arrayOfPaginatorNavigationObjects.length - 1].after :
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
  public getFeed(after?: string): void {

    const q = after ?
      `${environment.SUBREDDIT_BASE_URL}${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&after=${after}` :
      `${environment.SUBREDDIT_BASE_URL}${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}`;

    this._httpService.getRequest(q)
      .pipe(
        map(
          (listing: RedditListing): RedditPost[] => {
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

  public get subredditFormGroup(): FormGroup {
    return this._subredditFormGroup;
  }

  public get dataSource(): MatTableDataSource<RedditPost> {
    return this._dataSource;
  }

  public get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  /**
   * Returns a unix timestamp as a "time ago" string
   * @param unixTimestamp The timestamp to use
   */
  public timeAgo(unixTimestamp: number): string {
    return this._globals.timeAgo(unixTimestamp * 1000);
  }

  /**
   * Places placeholder image when the original image is not found
   * @param event Containing the image src
   */
  public imageNotFound(event: { target: { src: string; }; }): void {
    event.target.src = '../assets/not_found.jpg';
  }

}
