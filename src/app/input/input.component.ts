import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
   constructor(private router:Router)
   {

   }

   log(i: any)
   {
      this.router.navigate(['/input']);
   }
}
