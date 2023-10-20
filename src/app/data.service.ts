import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;
  formData : any[]=[];
  formDataJson : any;

  constructor() {}

  getDetails() {
    return this.data;
  }

  pushDetails(details : any) {
    this.data = details;
    return this.data;
  }

  InsertFormData(form:any)
  {
    this.formDataJson = form;
     this.formData = Object.entries(this.formDataJson);

    console.log("In data service File");
    console.log('JSON Object:', this.formDataJson);
    console.log('Array:', this.formData);

  }

  getFormData()
  {
    return this.formDataJson;
  }
}
