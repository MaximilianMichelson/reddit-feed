import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableBasicExample } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { ReadCommentsDialogComponentNonThreaded } from './read-comments-dialog-non-threaded/read-comments-dialog-non-threaded.component';
import { ShowFullImageDialogComponent } from './show-full-image-dialog/show-full-image-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [TableBasicExample, SelectedRowDialogComponent, ReadCommentsDialogComponent, ReadCommentsDialogComponentNonThreaded, ShowFullImageDialogComponent],
  declarations: [TableBasicExample, SelectedRowDialogComponent, ReadCommentsDialogComponent, ReadCommentsDialogComponentNonThreaded, ShowFullImageDialogComponent],
  bootstrap: [TableBasicExample]
})
export class AppModule { }
