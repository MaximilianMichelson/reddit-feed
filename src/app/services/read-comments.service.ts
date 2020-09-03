import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { ReadCommentsDialogComponent } from '../read-comments-dialog/read-comments-dialog.component';
import { MatDialog } from '@angular/material';
import { Comment } from "../app.component";
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReadCommentsService {

  constructor(
    private _httpService: HttpService,
    private _dialog: MatDialog,
    private _global: GlobalService
  ) { }

  readComments(id: string): void {
    this._httpService.getRequest(this._global.subredditBaseURL + this._global.currentSubreddit + `/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {
        this._dialog.open(ReadCommentsDialogComponent, {
          height: '80%',
          width: '80%',
          data: {
            comments: comments[1].data.children,
            // Comments[0] is the post; Comments[1] is the real comments.
            commentURL: this._global.subredditBaseURL + this._global.currentSubreddit + `/comments/${id}.json`
          }
        });
      });
  }
}