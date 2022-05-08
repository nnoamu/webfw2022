import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Concert } from 'src/app/shared/models/Concert';
import { ConcertService } from 'src/app/shared/services/concert.service';
import { TicketService } from 'src/app/shared/services/ticket.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  concerts :  Array<Concert> = []
  places : Array<string> = []
  userId: string = '';


  constructor(
    private concertService: ConcertService,
    private ticketService: TicketService,
    private actRoute: ActivatedRoute
  ) { }

  groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);


  ngOnInit(): void {
    this.concertService.getAll().subscribe(concert =>{
      this.concerts = concert

      this.places = Object.keys(this.groupBy(this.concerts, i => i.location.place));
      
    })

    this.actRoute.params.subscribe((param: any) => {
      this.userId = param.userId as string;
    })
  }


  makeReservation(){
    console.log(this.userId);
  }


}
