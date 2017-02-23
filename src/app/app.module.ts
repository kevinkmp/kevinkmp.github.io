import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavPrimaryComponent } from './nav-primary/nav-primary.component';
import { NavSecondaryComponent } from './nav-secondary/nav-secondary.component';
import { AppDaypartsComponent } from './app-dayparts/app-dayparts.component';
import { AppViewsComponent } from './app-views/app-views.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppApplicationComponent } from './app-application/app-application.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ViewsResultsComponent } from './app-views/views-results/views-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPrimaryComponent,
    NavSecondaryComponent,
    AppDaypartsComponent,
    AppViewsComponent,
    AppProfileComponent,
    AppUsersComponent,
    AppApplicationComponent,
    AppHomeComponent,
    ViewsResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'home',
        component: AppHomeComponent
      },
      {
        path: 'app/views',
        children: [
          {
            path: '',
            component: AppViewsComponent
          },
          {
            path: ':activityId',
            component: AppViewsComponent
          }
        ],
      },
      {
        path: 'app/dayparts',
        component: AppDaypartsComponent
      },
      {
        path: 'profile',
        component: AppProfileComponent
      },
      {
        path: 'users',
        component: AppUsersComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// {
//   path: 'app/views',
//     component: AppViewsComponent
// },
// {
//   path: 'app/views/:activityId',
//     component: AppViewsComponent
// },
