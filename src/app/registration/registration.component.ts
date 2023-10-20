import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  data:any = {};
  constructor(private dataService: DataService,private route:Router)
  {

  }
  postData(){
      this.dataService.pushDetails(this.data);
      console.log(this.data);
      this.route.navigate(['/login']);
    }
}
