import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';


@Component({
    selector: 'app-read-comments-dialog-component',
    templateUrl: './read-comments-dialog.component.html',
    styleUrls: ['./read-comments-dialog.component.css']
})
export class ReadCommentsDialogComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) private injectedData: {
            comments: MatTableDataSource<Comment>;
            commentURL: string
        }
    ) { }

    private _arrayOfComments: Comment[];
    private _arrayOfReplies: Comment[];

    private _commentURL: string;

    ngOnInit(): void {
        this._arrayOfComments = this.injectedData.comments.data;

        
        this._arrayOfReplies = (this._arrayOfComments[0].data as any).replies.data.children;

        this._commentURL = this.injectedData.commentURL;
    }

    get commentURL() {
        return this._commentURL;
    }

    get comments() {
        return this._arrayOfComments;
    }

    get replies() {
        return this._arrayOfReplies;
    }


}
