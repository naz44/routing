import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
import { IndiaComponent } from './india/india.component';
import { AppComponent } from './app.component';

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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
