import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorIntl, MatSort, MatTableDataSource, MatTable, MatPaginator, MatSelectChange } from '@angular/material';
import { HttpService } from './http-service/http-service'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectedRowDialogComponent } from './selected-row-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TableBasicExample implements OnInit {


  /**
   *
   */
  constructor(private _httpService: HttpService, public dialog: MatDialog) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  readSelfText(text: string) {
    const dialogRef = this.dialog.open(SelectedRowDialogComponent, {
      width: '250px',
      data: { text }
    });
  }

  ngOnInit(): void {

    this.displayedColumns = ['thumbnail', 'created', 'num_comments', 'author', 'score', 'permalink', 'title'];
    this.dataSource = new MatTableDataSource();


    this._httpService.getRequest('https://www.reddit.com/r/sweden.json?limit=25')
      .pipe(
        map(
          (allThings) => {
            allThings.data.children.forEach(element => {
              element.data.created = new Date(element.data.created * 1000)
              element.data.permalink = `https://reddit.com/${element.data.permalink}`
            });
            return allThings;
          }
        )
      )
      .subscribe(things => {

        console.log(things.data.children)
        console.log(things.data.children[0].data.author)
        console.log(things.data.children[0].data.created)


        this.dataSource.data = things.data.children;
        this.dataSource.paginator = this.paginator;


        this.dataSource.paginator._intl.itemsPerPageLabel = 'limit';
        this.dataSource.paginator._intl.nextPageLabel = 'Next';
        this.dataSource.paginator._intl.previousPageLabel = 'Previous';



      });
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
