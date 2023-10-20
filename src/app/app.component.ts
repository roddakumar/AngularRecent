import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
UsingForm() {
  this.router.navigate(['/forms']);
}
  title = 'angularApp';
  constructor(private router: Router) {

  }
  Registraion() {
    this.router.navigate(['/registration']);
  }

  DataBinding() {
    this.router.navigate(['/databinding']);
  }

  Login() {
    this.router.navigate(['/login']);
  }

  Test1() {
    this.router.navigate(['/test1']);
  }

  InputFeild()
  {
    this.router.navigate(['/input']);
  }
}
