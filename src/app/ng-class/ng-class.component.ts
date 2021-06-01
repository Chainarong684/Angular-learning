import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  randomNumber;

  constructor() {}

  ngOnInit(): void {}

  onClickRandom() {
    this.randomNumber = Math.floor(Math.random() * 10);
    console.log(this.randomNumber);
  }
}
