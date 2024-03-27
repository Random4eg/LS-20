import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { HomeLinksComponent } from './home-links/home-links.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeNewsComponent,
    HomeTasksComponent, 
    HomeLinksComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class HomeModule { }
