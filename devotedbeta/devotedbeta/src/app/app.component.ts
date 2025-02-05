import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostsPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devotedbeta';
}
