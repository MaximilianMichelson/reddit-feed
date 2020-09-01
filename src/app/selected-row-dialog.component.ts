import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-selected-row-dialog-component',
    templateUrl: './selected-row-dialog.component.html',
    styleUrls: ['./selected-row-dialog.component.css']
})
export class SelectedRowDialogComponent implements OnInit {


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: string,
    ) { }


    ngOnInit(): void {

    }



}
