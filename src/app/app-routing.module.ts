import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EInformationComponent } from './e-information/e-information.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import {TestComponent} from './test/test.component'

const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full"},
  { path:"test",component:TestComponent },
  { path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path:"home", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"services", component:ServicesComponent },
  { path:"contact", component:ContactComponent },
  { path:"e-information", component:EInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
