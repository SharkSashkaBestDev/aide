import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMainComponent } from './page-main/page-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'main', component: PageMainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
