import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from '.app.module';
import { ListsPageComponent} from './app.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'lists',
    component: ListsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
