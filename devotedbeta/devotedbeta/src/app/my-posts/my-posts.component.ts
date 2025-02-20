import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { fakePosts } from '../fake-data';
import { Posts } from '../types';


@Component({
  selector: 'app-my-posts',
  imports: [NgFor, RouterLink],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {
  posts: Posts[] = [];

  ngOnInit(): void {
    this.posts = fakePosts;
  }

  onDeleteClicked(postId?: string): void {
    alert('Deleting your post with id ' + postId)
  }
}
