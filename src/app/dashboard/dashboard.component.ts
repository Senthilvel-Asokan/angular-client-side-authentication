import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private _router:Router){
	}
	    
	logout() {
	    localStorage.removeItem('AUTH_TOKEN');
	    this._router.navigateByUrl('/login');	    
	}

  ngOnInit() {
  }
}