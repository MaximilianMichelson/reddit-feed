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
import { detectChanges } from '@angular/core/src/render3';

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
    private readonly _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  before;
  after;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _displayedColumns: string[];
  private _dataSource: MatTableDataSource<RedditItem>;
  private _subredditFormGroup: FormGroup;

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
    this.getFeed();
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
    (this.paginator.hasNextPage as any) = () => { return true };


    console.log(this.paginator)
    this.getFeed();
  }

  paginatorPageChange() {

    if (this.paginator.pageIndex + 1 > this.paginator.length) {
      console.log("lol")
      this.getFeed({ limit: 3, after: this.after });
      this.paginator.pageIndex = 0;

    }
  }


  getFeed(
    obj: {
      limit: number,
      before?: string,
      after?: string,
      firstTime?:boolean
    } = { limit: 3-1}): void {
    this._httpService.getRequest(environment.SUBREDDIT_BASE_URL + `${this._globals.currentSubreddit}.json?limit=${obj.limit}&before=${obj.before}&after=${obj.after}`)
      .pipe(
        map(
          (listing: RedditListing): RedditItem[] => {
            listing.data.children.forEach(element => {
              element.data.created = new Date(Number(element.data.created) * 1000).toLocaleDateString('sv-SV');
              element.data.permalink = `https://reddit.com/${element.data.permalink}`;
            });

            this.before = this.after;
            this.after = listing.data.after;

            return listing.data.children;
          }
        )
      )
      .subscribe(
        redditItems => this._dataSource.data = redditItems,
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
  };
}

interface RedditItem {
  data: {
    created: string;
    permalink: string;
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

