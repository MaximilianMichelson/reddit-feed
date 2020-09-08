
import { NgModule } from '@angular/core';
import { RedditTableComponent } from './app.component';
import { AngularModule } from './modules/angular-module';
import { AngularMaterialModule } from './modules/material-module';
import { AuthorNamePipe } from './person-name.pipe';
import { ReadCommentsDialogComponent } from './read-comments-dialog/read-comments-dialog.component';
import { SelectedRowDialogComponent } from './selected-row-dialog/selected-row-dialog.component';


@NgModule({
  imports: [
    AngularModule,
    AngularMaterialModule,
  ],
  entryComponents: [RedditTableComponent, SelectedRowDialogComponent, ReadCommentsDialogComponent],
  declarations: [RedditTableComponent, SelectedRowDialogComponent, ReadCommentsDialogComponent, AuthorNamePipe],
  bootstrap: [RedditTableComponent]
})
export class AppModule { }
