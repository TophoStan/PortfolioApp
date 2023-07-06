import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateItemComponent } from './create-item/create-item.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'create-item', component: CreateItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
