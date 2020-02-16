import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'seasons' },
  { path: 'page-not-found', component: NotFoundPageComponent },
  {
    path: 'seasons',
    loadChildren: () => import('./modules/seasons/seasons.module').then(module => module.SeasonsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
