import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-read-comments-dialog-component',
    templateUrl: './read-comments-dialog.component.html',
    styleUrls: ['./read-comments-dialog.component.css']
})
export class ReadCommentsDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) private injectedData: any) { }

    arrayOfComments: any[];
    
    ngOnInit(): void {

        this.arrayOfComments = this.injectedData.comments.data;

        this.arrayOfComments.forEach(comment => {
            console.log(comment.data.body)
        });
    }


}
