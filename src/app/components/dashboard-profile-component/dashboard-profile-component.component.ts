import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-profile-component',
  templateUrl: './dashboard-profile-component.component.html',
  styleUrls: ['./dashboard-profile-component.component.css']
})
export class DashboardProfileComponentComponent implements OnInit {
  // ctx = document.getElementById('#myChart');
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.chart();
  }

  chart() {
    const ctx = this.elementRef.nativeElement.querySelector(`#myChart`);
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
          data: [12, 19, 10],
          backgroundColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          animateRotate: true,
          animateScale: true
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            padding: 20
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0
          }
        }
      }
    });
  }
}
