import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
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
  pageSize = 10;
  arrayOfValue: {
    before: string,
    after: string
  }[] = []

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _displayedColumns: string[];
  private _dataSource: MatTableDataSource<RedditItem>;
  private _subredditFormGroup: FormGroup;

  length = 25;
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

  paginatorPageChange(event: {
    previousPageIndex: number,
    pageIndex: number,
    pageSize: number,
    length: number
  }) {

    console.log("ARray " + this.arrayOfValue.length)

    if ((event.pageSize !== this.pageSize) && this.arrayOfValue.length === 0) {
      this.pageSize = event.pageSize
      console.log("page size changed")
      this.getFeed(null,null,null,25);
      return
    }

    if ((event.pageSize !== this.pageSize) && this.arrayOfValue.length === 1) {
      this.pageSize = event.pageSize
      console.log("page size changed 222")
      this.getFeed(this.arrayOfValue[this.arrayOfValue.length - 1].after);
      return;
    }

    if ((event.pageSize !== this.pageSize) && this.arrayOfValue.length > 1) {
      this.pageSize = event.pageSize
      console.log("page size changed 333")
      this.getFeed(this.arrayOfValue[this.arrayOfValue.length - 1].after);
      return;
    }


    if (event.pageIndex === event.previousPageIndex) {
      if (this.arrayOfValue.length === 0) {
        return;
      }

      if (this.arrayOfValue.length === 1) {
        this.arrayOfValue.pop();
        this.getFeed(null, null, true);
        this._dataSource.paginator.pageIndex = 3;
        return;
      }




      const last = this.arrayOfValue.pop();
      this.getFeed(undefined, last.after);

      this._dataSource.paginator.pageIndex = 3;

    } else if (event.pageIndex * this._dataSource.paginator.pageSize >= this.length) {


      let before = null
      let after = null

      if (this.arrayOfValue.length > 0) {
        before = this.arrayOfValue[this.arrayOfValue.length - 1].after
      }


      after = this.next
      console.log(after)

      this.arrayOfValue.push({
        before,
        after
      })

      this.getFeed(after);
      this._dataSource.paginator.pageIndex = 0;

    }

  }


  getFeed(next?: string, last?, third?, limit?): void {

    let q: string;
    if (next) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&after=${next}`;
    } else if (last) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}&before=${last}`;
    } else if (third) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${this._dataSource.paginator.length}`;
    } else if (limit) {
      q = environment.SUBREDDIT_BASE_URL +
        `${this._globals.currentSubreddit}.json?limit=${limit}&after=${next}`;
    }
    else {
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

            const filtered = listing.data.children.filter(v => v.data.stickied === false);

            this.next = listing.data.after


            console.log(this.arrayOfValue)
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

