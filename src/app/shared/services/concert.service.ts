import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Concert } from '../models/Concert';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  collectionName = 'Concerts';

  constructor(private afs: AngularFirestore) { }

  create(concert: Concert) {
    concert.id = this.afs.createId();
    return this.afs.collection<Concert>(this.collectionName).doc(concert.id).set(concert);
  }

  getAll() {
    return this.afs.collection<Concert>(this.collectionName,ref => ref.orderBy('date', 'asc')).valueChanges();
  }

  update(concert: Concert) {
    return this.afs.collection<Concert>(this.collectionName).doc(concert.id).set(concert);
  }

  delete(id: string) {
    return this.afs.collection<Concert>(this.collectionName).doc(id).delete();
  }

  getCommentsByImageId(imageId: string) {
    return this.afs.collection<Concert>(this.collectionName, ref => ref.where('imageId', '==', imageId).orderBy('date', 'asc')).valueChanges();
  }

}
