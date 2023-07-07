import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item.class';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  @Input() item: Item;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentItem: Item = {
    name: '',
    description: '',
    imageUrl: '',
    type: '',
  }

  message = '';

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentItem = { ...this.item };
  }

  updateItem(): void {
    const data = {
      name: this.currentItem.name,
      description: this.currentItem.description,
      imageUrl: this.currentItem.imageUrl,
      type: this.currentItem.type,
    }
    if(this.currentItem.id) {
      this.itemService.update(this.currentItem.id, data)
        .then(() => this.message = 'The item was updated successfully!')
        .catch(err => console.log(err));
    }
  }
}
