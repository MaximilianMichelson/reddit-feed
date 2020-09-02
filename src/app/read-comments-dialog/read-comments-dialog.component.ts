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

    private _struct: any;
    public something: any = [];
    public se:Set<any>;
    private _commentURL: string;

    ngOnInit(): void {
        this._struct = {
            comments: this.injectedData.comments.data
        };

        for (const comment of this._struct.comments) {
            this.something.push(this.printReply('', comment));
            this.findReplies('', comment);
        }

        this.se = new Set(this.something)

    }


    findReplies(depth: string, comment) {
        if (!this.hasReplies(comment)) {
            this.printReply(depth, comment);
            this.something.push(this.printReply(depth, comment));
        }
        else {
            for (const reply of this.getReplies(comment)) {
                this.printReply(depth + '-', reply);
               // this.something.push(depth + '-', reply);
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

    printReply(depth, reply): string {
        console.log(depth + reply.data.body);
        return depth + reply.data.body;
    }

    get commentURL() {
        return this._commentURL;
    }

    get comments() {
        return this._struct;
    }

    commentLog(){
        console.log(this.something)
    }


}