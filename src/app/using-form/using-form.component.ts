import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-using-form',
  templateUrl: './using-form.component.html',
  styleUrls: ['./using-form.component.css']
})
export class UsingFormComponent {

  checkoutForm: FormGroup;

  constructor(formBuilder:FormBuilder,private dataService: DataService,private route:Router)
  {
    this.checkoutForm = formBuilder.group({
      name: '',
     address: '',
    });
  }



  onSubmit(){
    this.dataService.InsertFormData(this.checkoutForm.value);
    this.route.navigate(['/login']);
    // this.checkoutForm.reset();
  }
}
