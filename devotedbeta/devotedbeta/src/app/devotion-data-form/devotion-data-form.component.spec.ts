import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionDataFormComponent } from './devotion-data-form.component';

describe('DevotionDataFormComponent', () => {
  let component: DevotionDataFormComponent;
  let fixture: ComponentFixture<DevotionDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevotionDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
