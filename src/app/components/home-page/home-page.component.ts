import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onInputEvent({target}): void {
    console.log(target);
    // const inputElement: HTMLInputElement =  <HTMLInputElement>event.target;
    // inputElement.disabled = true;
  }
}
