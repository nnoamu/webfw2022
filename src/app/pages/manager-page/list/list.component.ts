import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Concert } from 'src/app/shared/models/Concert';
import { ConcertService } from '../../../shared/services/concert.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  concerts :  Array<Concert> = []
  public displayedColumns: string[] = ['artist', 'date','gateOpen','price', 'quantity'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  public dataSource: MatTableDataSource<Concert>;

  constructor( private concertService: ConcertService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Concert>();
   }

  ngOnInit(): void {
    this.concertService.getAll().subscribe(concert =>{
      this.dataSource.data = concert
    })

  }

  edit(concert: Concert){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: concert
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.concertService.update(result)
      }
    });
    
  }

  delete(id:any){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.concertService.delete(id)      }
    });
    

  }


}
