import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-selected-row-dialog-component',
    templateUrl: './selected-row-dialog.component.html',
    styleUrls: ['./selected-row-dialog.component.css']
})
export class SelectedRowDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: {
            created: Date;
            comments: number;
            author: string;
            selftext: string;
            title: string;
        }
    ) { }

    get data() {
        return this._data;
    }
}
