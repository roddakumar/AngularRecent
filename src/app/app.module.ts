import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsingFormComponent } from './using-form/using-form.component';
import { DataService } from './data.service';
import { HighlightDirective } from './highlight.directive';
import { PassdatausinginputfeildDirective } from './passdatausinginputfeild.directive';
import { InputComponent } from './input/input.component';
import { ChildComponent } from './input/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    RegistrationComponent,
    LoginComponent,
    UsingFormComponent,
    HighlightDirective,
    PassdatausinginputfeildDirective,
    InputComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
