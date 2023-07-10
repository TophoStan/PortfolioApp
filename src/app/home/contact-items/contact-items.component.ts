import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-items',
  templateUrl: './contact-items.component.html',
  styleUrls: ['./contact-items.component.scss']
})
export class ContactItemsComponent {

  @Input() name : string;
  @Input() link : string;
}
