import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from './http-service/http-service'
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TableBasicExample implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _dialog: MatDialog
  ) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  public subredditFormGroup: FormGroup;
  private _currentSubreddit: string;
  private _currentSubredditComments: string;
  subredditBaseURL: string = 'https://www.reddit.com/r/';


  readSelfText(selftext: string, title: string): void {
    this._dialog.open(SelectedRowDialogComponent, {
      height: '80%',
      width: '40%',
      data: {
        text: selftext,
        title
      }
    });
  }

  readComments(data: any): void {
    console.log('comments url  ' + this.subredditBaseURL + this._currentSubreddit + `/comments/${data.id}.json`);

  
    this._dialog.open(ReadCommentsDialogComponent, {
      height: '80%',
      width: '40%',
      data: {

      }
    });
  }

  onSubredditChange(newSubreddit: string): void {
    this._currentSubreddit = newSubreddit.toLowerCase();
    this.getFeed();
  }

  onPageSizeChanged(size: number) {
    console.log(`New Feed Size ${size}`);
    this.getFeed();
  }

  ngOnInit(): void {

    this.displayedColumns = ['thumbnail', 'created', 'num_comments', 'author', 'score', 'permalink', 'title', 'comments'];
    this.dataSource = new MatTableDataSource();


    this.subredditFormGroup = new FormGroup({
      subreddit: new FormControl('')
    })

    this._currentSubreddit = 'sweden';
    this._currentSubredditComments = 'sweden';

    this.getFeed();
  }


  getFeed(): void {
    this._httpService.getRequest(this.subredditBaseURL + `${this._currentSubreddit}.json?limit=25`)
      .pipe(
        map(
          (allThings) => {
            allThings.data.children.forEach(element => {
              element.data.created = new Date(element.data.created * 1000)
              element.data.permalink = `https://reddit.com/${element.data.permalink}`
            });
            return allThings;
          }
        )
      )
      .subscribe(things => {

        this.dataSource.data = things.data.children;
        this.dataSource.paginator = this.paginator;


        this.dataSource.paginator._intl.itemsPerPageLabel = 'limit';
        this.dataSource.paginator._intl.nextPageLabel = 'Next';
        this.dataSource.paginator._intl.previousPageLabel = 'Previous';



      });
    console.log('Feed Refreshed')
  }
}
