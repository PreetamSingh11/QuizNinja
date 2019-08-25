import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard-profile-component',
  templateUrl: './dashboard-profile-component.component.html',
  styleUrls: ['./dashboard-profile-component.component.css']
})
export class DashboardProfileComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    d3.select('#chart').style('color', 'red');
  }

}
