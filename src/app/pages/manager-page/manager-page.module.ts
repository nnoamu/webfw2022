import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule  } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 

import { ManagerPageRoutingModule } from './manager-page-routing.module';
import { ManagerPageComponent } from './manager-page.component';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { ListComponent } from './list/list.component';
import { ConfirmationDialogComponent } from './list/confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './list/edit-dialog/edit-dialog.component';


@NgModule({
  declarations: [
    ManagerPageComponent,
    AddConcertComponent,
    ListComponent,
    ConfirmationDialogComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    ManagerPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule

  ]
})
export class ManagerPageModule { }
