import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service:StorageService,private route:Router) { }

  ngOnInit(): void {
  }
  myclick(){
    this.service.destroyToken()
    this.route.navigate(['./login'])
  }

}
