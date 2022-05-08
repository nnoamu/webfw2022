import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Concert } from 'src/app/shared/models/Concert';
import { Ticket } from 'src/app/shared/models/Ticket';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit {

  @Input() item;
  ticket: Ticket;
  userId: string = '';
  
  constructor(private ticketService : TicketService, private actRoute: ActivatedRoute) {
    this.item = <Concert>{};
    this.ticket = <Ticket>{};
   }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.userId = param.userId as string;
    })
  }

  makeReservation(){
    console.log(this.userId);
  }

}
