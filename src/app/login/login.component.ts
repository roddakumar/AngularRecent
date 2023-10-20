import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any ={};
  formData:any={};
Object: any;

currentStyles: Record<string, string> = {};
  canSave: boolean= true;
  isUnchanged: boolean =  false;
  isSpecial: boolean=true;
  fontColor: string = 'red';
/* . . . */
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px',
    'color': this.fontColor === 'red' ? 'red' : 'black',
  };
}

  constructor(private d: DataService) {
    this.data = this.d.getDetails();
    console.log(this.data);
    this.formData = this.d.getFormData();
    console.log(this.formData);
    this.setCurrentStyles() ;
  }

  ngOnInit()
  {

  }

  hasData(f:any): boolean {
    return f!= undefined && Object.keys(f).length > 0;
  }
}
