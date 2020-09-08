import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RedditComment, RedditCommentReply } from '../models/reddit.model';
import { GlobalService } from '../services/global.service';

@Component({
    selector: 'app-read-comments-dialog-component',
    templateUrl: './read-comments-dialog.component.html',
    styleUrls: ['./read-comments-dialog.component.css']
})
export class ReadCommentsDialogComponent implements OnInit {

    private _commentsAndAllNestedComments: RedditComment[];

    public constructor(
        @Inject(MAT_DIALOG_DATA) private readonly injectedData: {
            comments: { data: any };
            commentURL: string;
        },
        private readonly _globals: GlobalService
    ) { }

    public ngOnInit(): void {

        const comments = this.injectedData.comments.data ?
            this.injectedData.comments.data :
            this.injectedData.comments;

        this._commentsAndAllNestedComments = [];
        const noDuplicatesArray: RedditComment[] = [];

        // Get All Comments
        for (const comment of comments) {
            this._commentsAndAllNestedComments.push(
                {
                    author: this.getAuthor('', comment),
                    text: this.printReply('', comment),
                    score: this.getReplyScore(comment),
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

    /**
     * Returns the number of times the text includes "-""
     * @param text The text to check
     */
    public amountOfDashes(text: string): number {
        return (text.match(/-/g) || []).length;
    }

    /**
     * Calculates padding left based on the matched symbols
     * @param matches Number of matches
     */
    public getPaddingLeft(matches: number): string {
        return `${matches * 25}px`;
    }

    /**
     * Converts a unix timestamp to an "ago"
     * @param unixTimestamp The timestamp to convert
     */
    public timeAgo(unixTimestamp: number): string {
        return this._globals.timeAgo(unixTimestamp);
    }

    private findReplies(depth: string, comment: RedditCommentReply): void {
        if (!this.hasReplies(comment)) {
            this.printReply(depth, comment);
            this._commentsAndAllNestedComments.push(
                {
                    author: this.getAuthor(depth, comment),
                    text: this.printReply('', comment),
                    score: this.getReplyScore(comment),
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
                        score: this.getReplyScore(comment),
                        created: reply.data.created_utc * 1000
                    }
                );
                this.findReplies(depth + '-', reply);
            }
        }
    }

    private hasReplies(comment: RedditCommentReply): boolean {
        return Boolean(comment.data.replies);
    }

    private getReplies(comment: RedditCommentReply): RedditCommentReply[] {
        return comment.data.replies.data.children;
    }

    private printReply(depth: string, reply: RedditCommentReply): string {
        return `${depth}${reply.data.body}`;
    }

    private getAuthor(depth: string, reply: RedditCommentReply): string {
        return `${depth}${reply.data.author}`;
    }

    private getReplyScore(reply: RedditCommentReply): number {
        return reply.data.score;
    }

    public get comments(): RedditComment[] {
        return this._commentsAndAllNestedComments;
    }
}
