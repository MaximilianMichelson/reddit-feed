import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../http-service/http-service';
import { ReadCommentsService } from '../services/read-comments.service';

@Component({
    selector: 'app-selected-row-dialog-component',
    templateUrl: './selected-row-dialog.component.html',
    styleUrls: ['./selected-row-dialog.component.css']
})
export class SelectedRowDialogComponent implements OnInit {

    public doneLoading: boolean;

    public constructor(
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

    public async ngOnInit(): Promise<void> {
        this.doneLoading = false;
        await this.setVideoUrl();
    }

    public get id(): string {
        return this._data.id;
    }

    public get url(): string {
        return this._data.url;
    }

    public get permalink(): string {
        return this._data.permalink;
    }

    public get score(): number {
        return this._data.score;
    }

    public get title(): string {
        return this._data.title;
    }

    public get selftext(): string {
        return this._data.selftext;
    }

    public get author(): string {
        return this._data.author;
    }

    public get numOfComments(): number {
        return this._data.comments;
    }

    public get created(): Date {
        return this._data.created;
    }

    public get videoUrl(): string {
        return this._data.videoUrl;
    }

    public onReadComments(id: string): void {
        this._readCommentsService.readComments(id);
    }

    public imageNotFound(event: { target: { src: string; }; }): void {
        event.target.src = '../../assets/not_found.jpg';
    }

    public async setVideoUrl(): Promise<void> {

        // The rejected request reveales the unshortened video path
        const result = await this._httpService.getRequestCORS(this._data.url)
            .toPromise()
            .then(
                _onfulfilled => void 0,
                onrejected => onrejected.error.text
            );

        const htmlDoc = new DOMParser().parseFromString(result, 'text/html');
        const ogUrl = htmlDoc.querySelector(`meta[property='og:url']`);

        // Get the unshortened video url if it exists
        if (ogUrl) {
            this._data.videoUrl = await this._httpService.getRequest(`${ogUrl.getAttribute('content')}.json`)
                .toPromise()
                .then((data: any) => data[0].data.children[0].data.secure_media.reddit_video.fallback_url)
                .catch(() => void 0);
        }
        this.doneLoading = true;
    }
}
