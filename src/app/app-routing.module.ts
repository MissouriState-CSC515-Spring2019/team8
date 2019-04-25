import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MarsroverComponent} from './marsrover/marsrover.component';
import {PicofdayComponent} from './picofday/picofday.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'marsrover', component: MarsroverComponent},
  {path: 'picofday', component: PicofdayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
