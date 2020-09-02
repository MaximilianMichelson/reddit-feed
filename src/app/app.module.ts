import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableBasicExample } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { ReadCommentsDialogComponentNonThreaded } from './read-comments-dialog-non-threaded/read-comments-dialog-non-threaded.component';

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
  entryComponents: [TableBasicExample, SelectedRowDialogComponent, ReadCommentsDialogComponent, ReadCommentsDialogComponentNonThreaded],
  declarations: [TableBasicExample, SelectedRowDialogComponent, ReadCommentsDialogComponent, ReadCommentsDialogComponentNonThreaded],
  bootstrap: [TableBasicExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
