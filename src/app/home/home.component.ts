import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private requestsService: RequestsService) {}

  ngOnInit() {
  }
  
  loginMethod(){
  	this.requestsService.createToken();  	
  }
}
