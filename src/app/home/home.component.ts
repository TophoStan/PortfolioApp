import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faArrowAltCircleDown, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  arrow = faArrowDown;
  currentPosition = window.scrollY;


  constructor(private route : ActivatedRoute) { 
  }

  ngOnInit(): void {

  }
  ngAfterViewChanges(){
    
  }

  changeArrow(event : any){

    this.arrow = faArrowUp;
    console.log(event);
    
  }
}
