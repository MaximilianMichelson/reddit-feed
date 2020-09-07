import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _readCommentsService: ReadCommentsService,
    private readonly _globals: GlobalService,
    private readonly _snackBar: MatSnackBar
  ) { }

  last;
  current;
  next;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _displayedColumns: string[];
  private _dataSource: MatTableDataSource<RedditItem>;
  private _subredditFormGroup: FormGroup;

  length = 25;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];

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

  onReadComments(id: string): void {
    this._readCommentsService.readComments(id);
  }

  onSubredditChange(newSubreddit: string): void {
    this._globals.currentSubreddit = newSubreddit.toLowerCase();
    this.getFeed(null);
  }

  ngOnInit(): void {
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



    (this.paginator.hasNextPage as any) = () => true;
    (this.paginator.hasPreviousPage as any) = () => true;
    this.paginator['prev'] = null;

    this.getFeed();
  }

  paginatorPageChange(event: { pageIndex: number; previousPageIndex: number; }) {
    if (event.pageIndex === event.previousPageIndex) {
      this.getFeed(undefined, this.last);
      this._dataSource.paginator.pageIndex = 3;
    } else if (event.pageIndex * this.pageSize > this.length) {
      this.getFeed(this.next);
      this._dataSource.paginator.pageIndex = 0;
    }

  }


  getFeed(next?: string, last?): void {


    console.log(this._dataSource.paginator.length)
    let q: string;
    if (next) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&after=${this.next}`;
    } else if (last) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&before=${this.current}`;
    } else {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.pageSize}`;
    }

    this._httpService.getRequest(q)
      .pipe(
        map(
          (listing: RedditListing): RedditItem[] => {
            listing.data.children.forEach(element => {
              element.data.created = new Date(Number(element.data.created) * 1000).toLocaleDateString('sv-SV');
              element.data.permalink = `https://reddit.com/${element.data.permalink}`;
            });

            if (next) {
              this.last = this.current;
              listing.data.before = this.last;

              this.current = this.next;
              listing.data.current = this.current;

              this.next = listing.data.after;
              listing.data.after = this.next;
            } else if (last) {
              this.next = this.current;
              listing.data.after = this.next;

              this.current = this.last;
              listing.data.current = this.current;
            } else {
              this.last = listing.data.after;
              listing.data.before = this.last;

              this.current = listing.data.after;
              listing.data.current = this.current;

              this.next = listing.data.after;
              listing.data.after = this.next;
            }

            const filtered = listing.data.children.filter(v => v.data.stickied === false);

            return filtered;
          }
        )
      )
      .subscribe(
        (redditItems) => {
          this._dataSource.data = redditItems;
        }
        ,
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

  timeAgo(unixTimestamp: number): string {
    return this._globals.timeAgo(unixTimestamp * 1000);
  }

  imageNotFound(event: { target: { src: string; }; }): void {
    event.target.src = '../assets/not_found.jpg';
  }

}

interface RedditListing {
  data: {
    children: RedditItem[];
    after: string;
    before: string;
    current: string;
  };
}

interface RedditItem {
  data: {
    created: string;
    permalink: string;
    stickied: boolean;
  };
}

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

