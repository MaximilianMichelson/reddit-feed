import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableBasicExample } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTable, MatTableDataSource, MatSort, MatPaginator, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { SelectedRowDialogComponent } from './selected-row-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [TableBasicExample,SelectedRowDialogComponent],
  declarations: [TableBasicExample, SelectedRowDialogComponent],
  bootstrap: [TableBasicExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
