import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MarsroverComponent} from './marsrover/marsrover.component';
import {PicofdayComponent} from './picofday/picofday.component';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {MarsroverdateComponent} from './marsroverdate/marsroverdate.component';
import {AsteroidsdateComponent} from './asteroidsdate/asteroidsdate.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marsrover', component: MarsroverComponent},
  {path: 'marsrover/:date', component: MarsroverdateComponent},
  {path: 'picofday', component: PicofdayComponent},
  {path: 'asteroids', component: AsteroidsComponent},
  {path: 'asteroids/:date', component: AsteroidsdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MarsroverdateComponent,AsteroidsComponent]
