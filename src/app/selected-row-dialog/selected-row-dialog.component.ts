import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ReadCommentsService } from '../services/read-comments.service';


@Component({
    selector: 'app-selected-row-dialog-component',
    templateUrl: './selected-row-dialog.component.html',
    styleUrls: ['./selected-row-dialog.component.css']
})
export class SelectedRowDialogComponent {
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
        },
        private readonly _readCommentsService: ReadCommentsService
    ) { }

    get data() {
        return this._data;
    }

    get id() {
        return this._data.id;
    }

    onReadComments(id: string) {
        this._readCommentsService.readComments(id);
    }



}
