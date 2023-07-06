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



  constructor(private route : ActivatedRoute, private itemService : ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  openDetails($event : any){
    console.log($event.target.id);
    
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
}
