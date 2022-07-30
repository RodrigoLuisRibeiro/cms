import { Component, OnInit } from '@angular/core';
import { Header2Service } from '../../header2/header2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: Header2Service) { 
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }
  
  ngOnInit(): void {
  }

}
