import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service';
import { ReadCommentsDialogComponent, Reply } from '../read-comments-dialog/read-comments-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { GlobalService } from './global.service';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadCommentsService {

  constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _global: GlobalService,
    private readonly _snackBar: MatSnackBar
  ) { }

  /**
   * Opens a new window containing the post's comments.
   * @param id The id of the post to get comments from.
   */
  readComments(id: string): void {
    this._httpService.getRequest(`${environment.SUBREDDIT_BASE_URL}${this._global.currentSubreddit}/comments/${id}.json`)
      .subscribe((comments: Comment[]) => {
        console.log(comments[1].data.children.length)
        if (comments[1].data.children.length === 0) {
          this._snackBar.open('This post has no comments', 'OK', {
            duration: 5000
          })
          return;
        }
        this._dialog.open(ReadCommentsDialogComponent, {
          height: '80%',
          width: '80%',
          data: {
            // Comments[0] is the post; Comments[1] is the real comments.
            comments: comments[1].data.children,
            commentURL: `${environment.SUBREDDIT_BASE_URL}${this._global.currentSubreddit}/comments/${id}.json`
          }
        });
      });
  }

   getSecureMedia(url: string): Observable<unknown> {
     return this._httpService.getRequest(url)
  }
}

// TODO FIX
interface Comment {
  data: {
    children: {
      data: {
        replies: {
          data: Reply[]
        }
      };
    }[];
  };
}
