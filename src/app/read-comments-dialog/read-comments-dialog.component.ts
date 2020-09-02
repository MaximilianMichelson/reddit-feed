import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Comment } from "../app.component";
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

    private _arrayOfComments: string | any[];
    private _arrayOfReplies: any[][];

    private _commentURL: string;

    ngOnInit(): void {
        this._arrayOfComments = this.injectedData.comments.data;
        this._arrayOfReplies = [];


        for (const comment of this._arrayOfComments) {

            if (comment.data.replies) {

                let children = comment.data.replies.data.children;
                console.log(children.length)

                for (const child of children) {


                    let reply = child.data.body

                    if (child.data.replies) {
                        let temp: any[] = []
                        for (const iterator of child.data.replies.data.children) {
                    
                            temp.push(iterator.data.body)
                        }
                        this._arrayOfReplies.push([reply, temp])
                    }
                    else this._arrayOfReplies.push(reply)
                    console.log(this._arrayOfReplies)
                }

            }

        }

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
