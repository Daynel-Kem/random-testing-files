import { Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewDevotionComponent } from './new-devotion/new-devotion.component';
import { DevotionDetailsComponent } from './devotion-details/devotion-details.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditDevotionComponent } from './edit-devotion/edit-devotion.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: PostsPageComponent, pathMatch: 'full' },
  { path: 'posts/:id', component: DevotionDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new_devotion', component: NewDevotionComponent },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'my_posts', component: MyPostsComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'edit_devotion/:id', component: EditDevotionComponent },
];
