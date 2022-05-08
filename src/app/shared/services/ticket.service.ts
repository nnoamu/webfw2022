import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  collectionName = 'Tickets';

  constructor(private afs : AngularFirestore) { }

  create(ticket: Ticket) {
    ticket.id = this.afs.createId();
    return this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(ticket);
  }

  delete(id: string) {
    return this.afs.collection<Ticket>(this.collectionName).doc(id).delete();
  }
}
