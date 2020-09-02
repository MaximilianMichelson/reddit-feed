import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Comment } from "../app.component";
@Component({
    selector: 'app-read-comments-dialog-non-threaded-component',
    templateUrl: './read-comments-dialog-non-threaded.component.html',
    styleUrls: ['./read-comments-dialog-non-threaded.component.css']
})
export class ReadCommentsDialogComponentNonThreaded implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) private injectedData: {
            comments: MatTableDataSource<Comment>;
            commentURL: string
        }
    ) { }

    private _arrayOfComments: any[];
    private _replies: any[];


    public aa = [];
    public bb = [];

    private _commentURL: string;

    ngOnInit(): void {
        this._arrayOfComments = this.injectedData.comments.data;
        this._replies = [];


        this._commentURL = this.injectedData.commentURL;

        // for (const topComment of this._arrayOfComments) {

        //     if (topComment.data.replies) {

        //         for (const child of topComment.data.replies.data.children) {

        //             this._replies.push(topComment.data, child.data.body)
        //         }
        //     }
        // }

        //13

        this._arrayOfComments.forEach(comment => {
            this.bb.push(comment.data.body)

            if (comment.data.replies) {

                comment.data.replies.data.children.forEach(child => {

                    this.aa.push(child.data.body)

                    if (child.data.replies.data) {
                        child.data.replies.data.children.forEach(childchild => {

                            if (childchild.data.replies.data) {
                                childchild.data.replies.data.children.forEach(childchildchild => {
                                    this.aa.push("---------------------" + childchildchild.data.body)
                                });
                            }
                            else this.aa.push("--------------" + childchild.data.body)
                        });
                    }

                });

            }
            else this.bb.push(comment.data.body);
        });





    }

    get commentURL() {
        return this._commentURL;
    }

    get comments() {
        return this.aa;
    }

    get topComments() {
        return this.bb;
    }



}
