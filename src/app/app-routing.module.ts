import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakingComponent } from './baking/baking.component';
import { CyclingComponent } from './cycling/cycling.component';
import { GardeningComponent } from './gardening/gardening.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'cycling',
    component: CyclingComponent
  },
  {
    path: 'gardening',
    component: GardeningComponent
  },
  {
    path: 'baking',
    component: BakingComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
