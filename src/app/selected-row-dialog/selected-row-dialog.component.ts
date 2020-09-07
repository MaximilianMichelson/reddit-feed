import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ReadCommentsService } from '../services/read-comments.service';
import { HttpService } from '../http-service/http-service';

@Component({
    selector: 'app-selected-row-dialog-component',
    templateUrl: './selected-row-dialog.component.html',
    styleUrls: ['./selected-row-dialog.component.css']
})
export class SelectedRowDialogComponent implements OnInit {

    doneLoading: boolean;

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly _data: {
            created: Date;
            comments: number;
            author: string;
            selftext: string;
            title: string;
            score: number;
            permalink: string;
            url: string;
            id: string;
            videoUrl?: string
        },
        private readonly _readCommentsService: ReadCommentsService,
        private readonly _httpService: HttpService
    ) { }
    async ngOnInit(): Promise<void> {
        this.doneLoading = false;
        await this.setVideoUrl();
    }

    get id(): string {
        return this._data.id;
    }

    get url(): string {
        return this._data.url;
    }

    get permalink(): string {
        return this._data.permalink;
    }

    get score(): number {
        return this._data.score;
    }

    get title(): string {
        return this._data.title;
    }

    get selftext(): string {
        return this._data.selftext;
    }

    get author(): string {
        return this._data.author;
    }

    get numOfComments(): number {
        return this._data.comments;
    }

    get created(): Date {
        return this._data.created;
    }

    get videoUrl(): string {
        return this._data.videoUrl;
    }

    onReadComments(id: string): void {
        this._readCommentsService.readComments(id);
    }

    imageNotFound(event: { target: { src: string; }; }): void {
        event.target.src = '../../assets/not_found.jpg';
    }

    async setVideoUrl(): Promise<void> {
        const result = await this._httpService.getRequest(`https://cors-anywhere.herokuapp.com/${this._data.url}`)
            .toPromise()
            .then(
                null,
                onrejected => onrejected.error.text
            );

        const htmlDoc = new DOMParser().parseFromString(result, 'text/html');
        const ogUrl = htmlDoc.querySelector(`meta[property='og:url']`);

        ogUrl ? await this._httpService.getRequest(`${ogUrl.getAttribute('content')}.json`)
            .toPromise()
            .then((data: any) => {
                this._data.videoUrl = data[0].data.children[0].data.secure_media.reddit_video.fallback_url;
            })
            .catch(() => void 0) : Error();
        this.doneLoading = true;
    }
}
