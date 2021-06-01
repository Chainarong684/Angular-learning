import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  randomNumber = Math.floor(Math.random() * 10);

  constructor() {}

  ngOnInit(): void {}

  getColor() {
    return this.randomNumber > 5 ? 'green' : 'red';
  }

  onClickToRefesh() {
    location.reload();
  }
}
