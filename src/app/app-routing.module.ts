import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateItemComponent } from './crud/create-item/create-item.component';
import { ItemlistComponent } from './crud/itemlist/itemlist.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'create-item', component: CreateItemComponent },
  { path: 'list-item', component: ItemlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
