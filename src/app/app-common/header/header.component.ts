import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
  }

}
