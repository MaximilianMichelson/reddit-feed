import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
@Component({
    selector: 'show-full-image-dialog.component',
    templateUrl: './show-full-image-dialog.component.html',
    styleUrls: ['./show-full-image-dialog.component.css']
})
export class ShowFullImageDialogComponent implements OnInit {


    constructor(
        @Inject(MAT_DIALOG_DATA) private injectedData: { feedItem: any }
    ) { }


    ngOnInit(): void {
    }


    get url() {
        return this.injectedData.feedItem.url;
    }

    get title() {
        return this.injectedData.feedItem.title;
    }

    get created() {
        return this.injectedData.feedItem.created;
    }

    get image() {
        return this.injectedData.feedItem.url;
    }

    get num_comments() {
        return this.injectedData.feedItem.num_comments;
    }

    get author() {
        return this.injectedData.feedItem.author;
    }

    get ups() {
        return this.injectedData.feedItem.ups;
    }

    get comments() {
        return this.injectedData.feedItem.permalink;
    }

}