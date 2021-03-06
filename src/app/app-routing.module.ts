import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'auth', component: AuthenticateComponent},
  {path: 'dishes', component: DishesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'lifecycle', component: LifecyclehooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
