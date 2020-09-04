
import { NgModule } from '@angular/core';

import { RedditTableComponent } from './app.component';
import { AngularMaterialModule } from './modules/material-module';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { AngularModule } from './modules/angular-module';

@NgModule({
  imports: [
    AngularModule,
    AngularMaterialModule,
  ],
  entryComponents: [RedditTableComponent, SelectedRowDialogComponent, ReadCommentsDialogComponent],
  declarations: [RedditTableComponent, SelectedRowDialogComponent, ReadCommentsDialogComponent],
  bootstrap: [RedditTableComponent]
})
export class AppModule { }
