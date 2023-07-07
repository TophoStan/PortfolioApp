import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item.class';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  items?: Item[];
  currentItem?: Item;
  currentIndex = -1;
  title = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }


  retrieveItems(){
    this.itemService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(items => {
      this.items = items;      
    })
  }
  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }
}
