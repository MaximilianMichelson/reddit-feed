import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatDialogModule, MatInputModule, MatListModule, MatPaginatorModule, MatTableModule,
  MatToolbarModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatSnackBarModule, MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AngularMaterialModule { }
