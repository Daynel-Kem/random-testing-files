import { Component } from '@angular/core';
import { Posts } from '../types';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-page',
  imports: [NgFor, RouterModule],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

  posts?: Posts[] = [];

  constructor(
    private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

}
