import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevotionComponent } from './edit-devotion.component';

describe('EditDevotionComponent', () => {
  let component: EditDevotionComponent;
  let fixture: ComponentFixture<EditDevotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDevotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDevotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
