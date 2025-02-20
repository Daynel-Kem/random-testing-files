import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { DevotionDataFormComponent } from "../devotion-data-form/devotion-data-form.component";

@Component({
  selector: 'app-new-devotion',
  imports: [FormsModule, DevotionDataFormComponent],
  templateUrl: './new-devotion.component.html',
  styleUrl: './new-devotion.component.css'
})

export class NewDevotionComponent {

  constructor(
    private router: Router,
  ) {}

  onSubmit(): void {
    alert('Creating a new Devotion');
    this.router.navigateByUrl('/my_posts');
  }

}
