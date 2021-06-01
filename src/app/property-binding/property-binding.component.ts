import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  checker = true;

  constructor() {
    setTimeout(() => {
      this.checker = false;
      setTimeout(() => {
        this.checker = true;
        setTimeout(() => {
          this.checker = false;
          setTimeout(() => {
            this.checker = true;
            setTimeout(() => {
              this.checker = false;
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }

  ngOnInit(): void {}

  onClickBtn() {
    this.checker = true;
  }
}
