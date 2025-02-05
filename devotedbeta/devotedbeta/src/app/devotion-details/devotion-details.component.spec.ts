import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionDetailsComponent } from './devotion-details.component';

describe('DevotionDetailsComponent', () => {
  let component: DevotionDetailsComponent;
  let fixture: ComponentFixture<DevotionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
