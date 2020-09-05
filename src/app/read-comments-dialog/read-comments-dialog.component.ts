import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../services/global.service';

@Component({
    selector: 'app-read-comments-dialog-component',
    templateUrl: './read-comments-dialog.component.html',
    styleUrls: ['./read-comments-dialog.component.css']
})
export class ReadCommentsDialogComponent implements OnInit {

    private _commentsAndAllNestedComments: Comment[];

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly injectedData: {
            comments: { data: any };
            commentURL: string;
        },
        private readonly _globals: GlobalService
    ) { }

    ngOnInit(): void {

        const comments = (this.injectedData.comments.data) ? this.injectedData.comments.data : this.injectedData.comments;
        
        this._commentsAndAllNestedComments = [];
        const noDuplicatesArray: Comment[] = [];

        // Get All Comments
        for (const comment of comments) {
            this._commentsAndAllNestedComments.push(
                {
                    author: this.getAuthor('', comment),
                    text: this.printReply('', comment),
                    score: this.getScore(comment),
                    created: comment.data.created_utc * 1000
                }
            );

            // Get Nested Comments
            this.findReplies('', comment);
        }

        // Remove Duplicated
        for (const comment of this._commentsAndAllNestedComments) {
            if (noDuplicatesArray.findIndex(i => i.author === comment.author) === -1) {
                noDuplicatesArray.push(comment);
            }
        }

        this._commentsAndAllNestedComments = noDuplicatesArray;
    }


    private findReplies(depth: string, comment: Reply): void {
        if (!this.hasReplies(comment)) {
            this.printReply(depth, comment);
            this._commentsAndAllNestedComments.push(
                {
                    author: this.getAuthor(depth, comment),
                    text: this.printReply('', comment),
                    score: this.getScore(comment),
                    created: comment.data.created_utc * 1000
                }
            );
        } else {
            for (const reply of this.getReplies(comment)) {
                this.printReply('', reply);
                this._commentsAndAllNestedComments.push(
                    {
                        author: this.getAuthor(depth + '-', reply),
                        text: this.printReply('', reply),
                        score: this.getScore(comment),
                        created: reply.data.created_utc * 1000
                    }
                );
                this.findReplies(depth + '-', reply);
            }
        }
    }

    private hasReplies(comment: Reply): boolean {
        return comment.data.replies ? true : false;
    }

    private getReplies(comment: Reply): Reply[] {
        return comment.data.replies.data.children;
    }

    private printReply(depth: string, reply: Reply): string {
        return `${depth}${reply.data.body}`;
    }

    private getAuthor(depth: string, reply: Reply): string {
        return `${depth}${reply.data.author}`;
    }

    private getScore(reply: Reply): number {
        return reply.data.score;
    }

    get comments(): Comment[] {
        return this._commentsAndAllNestedComments;
    }

    amountOfDashes(text: string): number {
        return (text.match(/-/g) || []).length;
    }

    getPaddingLeft(matches: number): string {
        return `${matches * 25}px`;
    }

    timeAgo(unixTimestamp: number): string {
        return this._globals.timeAgo(unixTimestamp);
    }
}

interface Comment {
    author: string;
    text: string;
    score: number;
    created: number;
    data?: {
        children: {
            data: {
                replies: {
                    data: Reply[];
                };
            };
        }[];
    };
}

export interface Reply {
    data: {
        author: string,
        body: string,
        score: number,
        created: string,
        created_utc: number,
        replies: {
            data: {
                children: Reply[]
            };
        };
    };
}
