import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  currentDate: Date = new Date();

  ngOnInit() {
    this.updateCurrentTime();
  }

  updateCurrentTime() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 0);
  }
}
