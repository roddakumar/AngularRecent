import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UsingFormComponent } from './using-form/using-form.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [{ path: 'registration', component: RegistrationComponent },
{ path: 'login', component: LoginComponent },
{ path: 'databinding', component: DataBindingComponent },
{path:'forms',component:UsingFormComponent},
{path:'input',component:InputComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
