import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcertService } from '../../../shared/services/concert.service';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.scss']
})
export class AddConcertComponent implements OnInit {


  concertForm = new FormGroup({
    artist: new FormControl(''),
    location: new FormGroup({
      city: new FormControl(''),
      place: new FormControl('')
    }),
    date: new FormControl(''),
    gateOpen: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

  concerts: Array<any> = [];
  constructor(
    private concertService: ConcertService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }

  
  addConcert(){
    if(this.concertForm.valid){
      this.concertService.create(this.concertForm.value).then( _ => {
        console.log("concert added succesfully!");
      }).catch(error => {
        console.error(error);
        
      })
    }
  }

}
