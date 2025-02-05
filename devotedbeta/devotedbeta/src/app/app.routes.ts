import { Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewDevotionComponent } from './new-devotion/new-devotion.component';
import { DevotionDetailsComponent } from './devotion-details/devotion-details.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'posts', component: PostsPageComponent, pathMatch: 'full' },
  { path: 'posts/:id', component: DevotionDetailsComponent },
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new_devotion', component: NewDevotionComponent },
  { path: 'profile/:id', component: ProfileComponent },
];
