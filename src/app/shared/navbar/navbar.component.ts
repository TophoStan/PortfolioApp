import { Component, OnInit } from '@angular/core';
import {faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faDiagramProject, faHome, faPerson, faProjectDiagram, faSchool} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  arrowDown = faArrowDown;
  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;
  arrowUp = faArrowUp;
  home= faHome;
  about=faPerson;
  education=faSchool;
  project=faProjectDiagram;
  document: any = document;

  currentPage :string = "home";

  constructor() { }



  ngOnInit(): void {
    
  }
}
