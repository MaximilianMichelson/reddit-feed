import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from './http-service/http-service'
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { ReadCommentsDialogComponentNonThreaded } from './read-comments-dialog-non-threaded/read-comments-dialog-non-threaded.component';
import { ShowFullImageDialogComponent } from './show-full-image-dialog/show-full-image-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBasicExample implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _dialog: MatDialog
  ) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<FeedItems>;
  public commentDataSource: MatTableDataSource<any>;
  public subredditFormGroup: FormGroup;
  private _currentSubreddit: string;
  beforeId;
  afterId;

  subredditBaseURL: string = 'https://www.reddit.com/r/';


  readSelfText(row: { selftext: string; created: Date; num_comments: number; title: string; author: string; score: number; permalink: string; url: string }): void {
    this._dialog.open(SelectedRowDialogComponent, {
      data: {
        created: row.created,
        comments: row.num_comments,
        selftext: row.selftext,
        title: row.title,
        author: row.author,
        score: row.score,
        permalink: row.permalink,
        url: row.url
      }
    });
  }

  readComments(id: string): void {
    console.log('comments url  ' + this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`);


    this._httpService.getRequest(this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {

        // Comments[0] is the post; Comments[1] is the real comments.
        this.commentDataSource.data = comments[1].data.children;


      });

    console.log('Comments Refreshed')

    this._dialog.open(ReadCommentsDialogComponent, {
      height: '80%',
      width: '80%',
      data: {
        comments: this.commentDataSource,
        commentURL: this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`
      }
    });
  }

  readCommentsNonThreaded(id: string): void {
    console.log('comments url  ' + this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`);


    this._httpService.getRequest(this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {

        // Comments[0] is the post; Comments[1] is the real comments.
        this.commentDataSource.data = comments[1].data.children;


      });

    console.log('Comments Refreshed')

    this._dialog.open(ReadCommentsDialogComponentNonThreaded, {
      height: '80%',
      width: '80%',
      data: {
        comments: this.commentDataSource,
        commentURL: this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`
      }
    });
  }

  onSubredditChange(newSubreddit: string): void {
    this._currentSubreddit = newSubreddit.toLowerCase();
    this.getFeed();
  }

  onPageSizeChanged(size: number, page): void {
    console.log(page)

    // NEXT
    if (page.pageIndex > page.previousPageIndex) {
      this.getFeed();


    }

    // PREVIOUS
    else if (page.pageIndex < page.previousPageIndex) {
      console.log("orev")
      this.getFeed();
    }



  }


  showFullImage(feedItem): void {
    console.log(feedItem);

    this._dialog.open(ShowFullImageDialogComponent, {
      height: '80%',
      width: '80%',
      data: {
        feedItem
      }
    });

  }

  ngOnInit(): void {

    this.displayedColumns = ['index', 'thumbnail', 'created', 'num_comments', 'author', 'score', 'permalink', 'title', 'comments', 'comments_non_threaded'];
    this.dataSource = new MatTableDataSource();
    this.commentDataSource = new MatTableDataSource();

    this.subredditFormGroup = new FormGroup({
      subreddit: new FormControl('')
    })

    this._currentSubreddit = 'sweden';


    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'limit';
    this.dataSource.paginator._intl.nextPageLabel = 'Next';
    this.dataSource.paginator._intl.previousPageLabel = 'Previous';

    this.getFeed();
  }



  getFeed(): void {


    this._httpService.getRequest(this.subredditBaseURL + `${this._currentSubreddit}.json?limit=1000`)
      .pipe(
        map(
          (feedItems: FeedItems): FeedItems => {
            feedItems.data.children.forEach(element => {
              element.data.created = new Date(element.data.created * 1000).toLocaleDateString("sv-SV");
              element.data.permalink = `https://reddit.com/${element.data.permalink}`
            });
            return feedItems;
          }
        )
      )
      .subscribe((feedItems: any) => {

        for (const iterator of feedItems.data.children) {
          console.log(iterator.data.title)

        }
        this.dataSource.data = feedItems.data.children;
        console.log('Feed Refreshed');

      });
  }
}

interface FeedItems {
  data: {
    children: any[];
    created: Date;
    permalink: string;
  }
}


export interface Comment {
  data: {
    children: {
      data: { replies: { data: any[] } }[];
    }[];
  };
}