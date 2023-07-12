import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent {


  @Input() grades: string[];
  @Input() schoolName: string;
  @Input() schoolLogo: string;
  @Input() yearFrom: string;
  @Input() yearTo: string;
  @Input() level: string;
  @Input() description: any;

}
