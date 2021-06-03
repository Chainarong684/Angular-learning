import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop3',
  templateUrl: './workshop3.component.html',
  styleUrls: ['./workshop3.component.css']
})
export class Workshop3Component implements OnInit {
  toggleData = false
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickAction() {
    this.toggleData = !this.toggleData
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }

}
