import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  isShowing = false;
  status = 'Show';

  constructor() {}

  ngOnInit(): void {}

  isChecking() {
    if (this.isShowing === false) {
      this.isShowing = true;
      this.status = 'Hide';
    } else {
      this.isShowing = false;
      this.status = 'Show';
    }
  }
}
