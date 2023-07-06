import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from './models/item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private dbPath = '/items';

  itemsRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.itemsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Item> {
    return this.itemsRef;
  }

  create(item: Item) : any {
    return this.itemsRef.add({...item});
  }


  
}
