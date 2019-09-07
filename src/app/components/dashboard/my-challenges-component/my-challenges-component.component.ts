import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-challenges-component',
  templateUrl: './my-challenges-component.component.html',
  styleUrls: ['./my-challenges-component.component.scss']
})
export class MyChallengesComponentComponent implements OnInit {

  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
