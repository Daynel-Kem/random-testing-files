import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Posts } from '../types';
import { PostsService } from '../posts.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-devotion-details',
  imports: [RouterModule, NgIf],
  templateUrl: './devotion-details.component.html',
  styleUrl: './devotion-details.component.css'
})
export class DevotionDetailsComponent {

  isLoading: boolean = true;
  post?: Posts;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.postsService.getPostById(id).subscribe(post => {
        this.post = post;
        this.isLoading = false;
    })
    this.postsService.addViewToPost(id).subscribe(() => console.log('Views Updated'))
  }

}
