import { Component } from '@angular/core';
import { Item } from '../../models/item.class';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  item: Item = new Item();
  submitted = false;

  constructor(private itemService: ItemService) { }

  saveitem(): void {
    this.itemService.create(this.item).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newitem(): void {
    this.submitted = false;
    this.item = new Item();
  }
}
