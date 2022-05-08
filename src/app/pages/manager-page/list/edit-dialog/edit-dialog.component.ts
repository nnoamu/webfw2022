import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Concert } from 'src/app/shared/models/Concert';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  formInstance: FormGroup;
  editObj = <Concert>{};

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Concert) {
     
    this.formInstance = new FormGroup({
      id: new FormControl('',Validators.required),
      artist: new FormControl('',Validators.required),
      location: new FormGroup({
        city: new FormControl('',Validators.required),
        place: new FormControl('',Validators.required)
      }),
      date: new FormControl('',Validators.required),
      gateOpen: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
    });
    this.formInstance.setValue(data);
  }

  ngOnInit(): void {
  }

  save(): void{
    this.dialogRef.close(Object.assign(this.editObj, this.formInstance.value));
    console.log(this.editObj);
    
  }

}
