import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devotedbeta';
}
