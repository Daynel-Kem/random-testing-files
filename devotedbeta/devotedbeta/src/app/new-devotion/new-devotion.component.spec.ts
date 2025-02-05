import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevotionComponent } from './new-devotion.component';

describe('NewDevotionComponent', () => {
  let component: NewDevotionComponent;
  let fixture: ComponentFixture<NewDevotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDevotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDevotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
