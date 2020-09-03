import { Injectable } from '@angular/core';
import { HttpService } from './http-service/http-service';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Comment } from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class ReadCommentsService {

  public _currentSubreddit: string = 'sweden';
  public subredditBaseURL: string = 'https://www.reddit.com/r/';

  constructor(
    private _httpService: HttpService,
    private _dialog: MatDialog
  ) { }

  readComments(id: string): void {
    this._httpService.getRequest(this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {
        this._dialog.open(ReadCommentsDialogComponent, {
          height: '80%',
          width: '80%',
          data: {
            // Comments[0] is the post; Comments[1] is the real comments.
            comments: comments[1].data.children,
            commentURL: this.subredditBaseURL + this._currentSubreddit + `/comments/${id}.json`
          }
        });
      });
  }
}
