import { Component, OnInit } from '@angular/core';
import { DevotionDataFormComponent } from "../devotion-data-form/devotion-data-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../types';
import { fakePosts } from '../fake-data';

@Component({
  selector: 'app-edit-devotion',
  imports: [DevotionDataFormComponent],
  templateUrl: './edit-devotion.component.html',
  styleUrl: './edit-devotion.component.css'
})
export class EditDevotionComponent {

  post?: Posts;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.post = fakePosts.find(post => post.id === id)
  }

  onSubmit(): void {
    alert('Saving Changes to the listing');
    this.router.navigateByUrl('/my_posts')
  }

}
