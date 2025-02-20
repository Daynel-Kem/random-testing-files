import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { Posts } from '../types';

@Component({
  selector: 'app-devotion-data-form',
  imports: [FormsModule],
  templateUrl: './devotion-data-form.component.html',
  styleUrl: './devotion-data-form.component.css'
})
export class DevotionDataFormComponent {
  @Input() currentTitle?: any = '';
  @Input() currentPassage?: any = '';
  @Input() currentDescription?: any = '';

  @Input() buttonText: string = '';

  title?: string = '';
  passage?: string = '';
  description?: string = '';

  @Output() onSubmit = new EventEmitter<Posts>();

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.title = this.currentTitle;
    this.passage = this.currentPassage;
    this.description = this.currentDescription;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: undefined,
      title: this.title,
      passage: this.passage,
      description: this.description, 
      views: 0,
    })
  }

}
