import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLoaderComponent } from './medical-loader.component';

describe('MedicalLoaderComponent', () => {
  let component: MedicalLoaderComponent;
  let fixture: ComponentFixture<MedicalLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
