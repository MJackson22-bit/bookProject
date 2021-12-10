import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaReactiveFormComponent } from './veterinaria-reactive-form.component';

describe('VeterinariaReactiveFormComponent', () => {
  let component: VeterinariaReactiveFormComponent;
  let fixture: ComponentFixture<VeterinariaReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariaReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariaReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
