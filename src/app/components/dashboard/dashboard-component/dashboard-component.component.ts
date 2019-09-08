import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {

  categories = ['Programming', 'History', 'Politics'];
  chartData = [12, 19, 10];
  items = Array.from({ length: 100 }).map((_, i) => `Item #${i}`);

  myChart: Chart;
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.chart(this.chartData);
  }

  log(selectedCategory: any) {
    switch (selectedCategory) {
      case 'Programming':
        this.chart([12, 16, 18]);
        break;
      case 'History':
        this.chart([17, 23, 11]);
        break;
      case 'Politics':
        this.chart([3, 13, 8]);
        break;
      default:
        break;
    }
  }


  chart(chartData: number[]) {
    // Chart.defaults.global.elements.rectangle.borderWidth = 2;
    // Chart.defaults.global.elements.rectangle.borderColor = '#342';
    if (typeof this.myChart !== 'undefined') {
      this.myChart.destroy();
    }
    const ctx = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
          data: chartData,
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
            padding: 20,
            usePointStyle: true
          }
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 10
          }
        }
      }
    });

    this.myChart.update();
  }

}
