import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.class';

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.scss']
})
export class ExperienceItemsComponent {

  @Input()itemArr : Item[];
  @Input()title : string;
  @Input()clickMethod : Function;
  currentOpenDetails : string = "empty";

  openDetails($event : any){
    // this.closeDetails();
    if(this.currentOpenDetails == "empty"){
      this.currentOpenDetails = $event.target.id;
      document.getElementById(`desc${$event.target.id}`)?.classList.toggle("active");
      document.getElementById(`${this.currentOpenDetails}`)?.classList.toggle("active");

      //disable previous enable other
    } else if(this.currentOpenDetails != $event.target.id){

      document.getElementById(`desc${this.currentOpenDetails}`)?.classList.toggle("active");
      document.getElementById(`${this.currentOpenDetails}`)?.classList.toggle("active");

      this.currentOpenDetails = $event.target.id;

      document.getElementById(`desc${this.currentOpenDetails}`)?.classList.toggle("active");
      document.getElementById(`${this.currentOpenDetails}`)?.classList.toggle("active");

      //toggle off
    } else if(this.currentOpenDetails == $event.target.id){
      document.getElementById(`desc${$event.target.id}`)?.classList.toggle("active");
      document.getElementById(`${$event.target.id}`)?.classList.toggle("active");
      
      this.currentOpenDetails = "empty";      
    }
  }
}
