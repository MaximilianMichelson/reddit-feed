import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { HttpService } from '../http-service/http-service';
import { RedditComment } from '../models/reddit.model';
import { ReadCommentsDialogComponent } from '../read-comments-dialog/read-comments-dialog.component';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReadCommentsService {

  public constructor(
    private readonly _httpService: HttpService,
    private readonly _dialog: MatDialog,
    private readonly _global: GlobalService,
    private readonly _snackBar: MatSnackBar
  ) { }

  /**
   * Opens a new window containing the post's comments.
   * @param id The id of the post to get comments from.
   */
  public readComments(id: string): void {
    this._httpService.getRequest(`${environment.SUBREDDIT_BASE_URL}${this._global.currentSubreddit}/comments/${id}.json`)
      .subscribe((comments: RedditComment[]) => {

        // Comments[0] is the post; Comments[1] is the real comments.
        comments[1].data.children.length === 0 ?
          this._snackBar.open('This post has no comments', 'OK', {
            duration: 5000
          }) :
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
}
