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
            comments: MatTableDataSource<any>;
            commentURL: string
        }
    ) { }

    private _struct: JSONSTRUCTURE;
    private _arrayOfReplies: any[];


    private _commentURL: string;

    // ngOnInit(): void {
    //     this._arrayOfComments = this.injectedData.comments.data;
    //     this._arrayOfReplies = [];



    //     for (const comment of this._arrayOfComments) {

    //         if (comment.data.replies) {
    //             let children = comment.data.replies.data.children;
    //             for (const child of children) {

    //                 if (child.data.replies) {
    //                     for (const iterator of child.data.replies.data.children) {
    //                         iterator.reply = child.data.body
    //                         this._arrayOfReplies.push(iterator.reply)
    //                         // comment.replies = [iterator.data.body];
    //                     }
    //                 }
    //                 else this._arrayOfReplies.push(child.data.body)
    //             }
    //         }

    //     }

    //     this._commentURL = this.injectedData.commentURL;
    // }

    ngOnInit(): void {
        this._struct = {
            comments: this.injectedData.comments.data
        };
        console.log("STRUCT " + this._struct.comments)


        for (const comment of this._struct.comments) {
            this.printReply('',comment);
            this.findReplies('', comment);
        }

        //     if (this.hasReplies(comment)) {
        //         // 1st nestled reply
        //         for (const reply of this.getReplies(comment)) {
        //             this.printReply('---', reply);

        //             // 2nd nestled reply
        //             if (this.hasReplies(reply)) {
        //                 for (const rep of this.getReplies(reply)) {
        //                     this.printReply('------', rep);

        //                     // 3rd nestled reply
        //                     if (this.hasReplies(rep)) {
        //                         for (const reps of this.getReplies(rep)) {
        //                             this.printReply('----------', reps);
        //                         }
        //                     }
        //                 }
        //             }


        //         }
        //     }








    }


    findReplies(depth: string, comment) {
        if (!this.hasReplies(comment)) {
            this.printReply(depth, comment);
        }
        else {
            for (const reply of this.getReplies(comment)) {
                this.printReply(depth + '-', reply);
                this.findReplies(depth + '-', reply);
            }
        }
    }


    hasReplies(comment: any): boolean {
        return comment.data.replies;
    }

    getReplies(comment: any): any[] {
        return comment.data.replies.data.children;
    }

    printReply(depth, reply) {
        console.log(depth + reply.data.body);
    }

    get commentURL() {
        return this._commentURL;
    }

    get comments() {
        return this._struct;
    }

    get replies() {
        return this._arrayOfReplies;
    }



}
interface JSONSTRUCTURE {
    comments: any[]
}