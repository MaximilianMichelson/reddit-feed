import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { ReadCommentsDialogComponent } from '../read-comments-dialog/read-comments-dialog.component';
import { MatDialog } from '@angular/material';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReadCommentsService {

  constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _global: GlobalService
  ) { }

  /**
   * Opens a new window containing the post's comments.
   * @param id The id of the post to get comments from.
   */
  readComments(id: string): void {
    this._httpService.getRequest(this._global.subredditBaseURL + this._global.currentSubreddit + `/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {
        this._dialog.open(ReadCommentsDialogComponent, {
          height: '80%',
          width: '80%',
          data: {
            // Comments[0] is the post; Comments[1] is the real comments.
            comments: comments[1].data.children,
            commentURL: this._global.subredditBaseURL + this._global.currentSubreddit + `/comments/${id}.json`
          }
        });
      });
  }
}

// TODO FIX
interface Comment {
  data: {
    children: {
      data: {
        replies: {
          data: any[]
        }
      };
    }[];
  };
}
