import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
import { IndiaComponent } from './india/india.component';
import { AppComponent } from './app.component';
import { SrilankaComponent } from './srilanka/srilanka.component';
import { AustraliaComponent } from './australia/australia.component';
const routes: Routes = [
  {
    path:'home',
    component:AppComponent
  },
  {
    path:'India',
    component  : IndiaComponent
  },
  {
    path:'Bangladesh',
    component :BangladeshComponent
  },
  {
    path:'Srilanka',
    component :SrilankaComponent
  },
  {
    path:'Australia',
    component :AustraliaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
