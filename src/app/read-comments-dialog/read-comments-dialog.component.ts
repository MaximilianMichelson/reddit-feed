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
            comments: MatTableDataSource<any>;
            commentURL: string
        }
    ) { }

    private _struct: any;
    public something: Item[] = [];
    private _commentURL: string;
    newArr = []
    ngOnInit(): void {
        this._struct = {
            comments: this.injectedData.comments.data
        };

        for (const comment of this._struct.comments) {
            this.something.push(
                {
                    author: this.getAuthor('', comment),
                    text: this.printReply('', comment)
                }
            );
            this.findReplies('', comment);
        }

        this.something.forEach((item, index) => {
            if (this.newArr.findIndex(i => i.author == item.author) === -1) {
                this.newArr.push(item)
            }

        });
        this.something = this.newArr
    }


    findReplies(depth: string, comment) {
        if (!this.hasReplies(comment)) {
            this.printReply(depth, comment);
            this.something.push(
                {
                    author: this.getAuthor(depth, comment),
                    text: this.printReply('', comment)
                }
            );
        }
        else {
            for (const reply of this.getReplies(comment)) {
                this.printReply('', reply);
                this.something.push(
                    {
                        author: this.getAuthor(depth + '---', reply),
                        text: this.printReply('', reply)
                    }
                );
                this.findReplies(depth + '---', reply);
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

    getAuthor(depth, reply): string {
        return depth + reply.data.author;
    }

    get commentURL() {
        return this._commentURL;
    }

    get comments() {
        return this._struct;
    }

    commentLog() {
        console.log(this.something)
    }

}


interface Item {
    author: string;
    text: string;
}