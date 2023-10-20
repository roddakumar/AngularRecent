import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message = 'Hello from Angular';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  clickCount = 0;
  name = '';
  isDisabled = true;
  isHighlighted = false;
  textColor = 'blue';
  dateToday!: string;


  ngOnInit()
  {
    this.dateToday = new Date().toDateString();
  }
  onClick() {
    this.clickCount++;
    this.isDisabled = !this.isDisabled;
    this.isHighlighted = !this.isHighlighted;
    this.textColor = this.textColor === 'blue' ? 'red' : 'blue';
  }

}
