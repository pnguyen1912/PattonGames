import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'testgame', loadChildren: './testgame/testgame.module#TestgamePageModule' },
  { path: 'testgame2', loadChildren: './testgame2/testgame2.module#Testgame2PageModule' },
  { path: 'home1', loadChildren: './home1/home1.module#Home1PageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
