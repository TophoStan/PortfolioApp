import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faArrowAltCircleDown, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, map } from 'rxjs';
import { Item } from '../models/item.class';
import { ItemService } from '../tutorial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  arrow = faArrowDown;
  items? : Item[];  
  currentOpenDetails : string = "empty";

  languageItems : Item[];
  databaseItems : Item[];
  frameworkItems : Item[];
  otherItems : Item[];


  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
   
  }

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

  retrieveItems(){
    this.itemService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(items => {
      this.items = items;
      this.languageItems = this.items.filter(item => item.type == "language");
      this.databaseItems = this.items.filter(item => item.type == "database");
      this.frameworkItems = this.items.filter(item => item.type == "framework");
      this.otherItems = this.items.filter(item => item.type == "other");
      console.log(this.frameworkItems);
      
    })
  }
}
