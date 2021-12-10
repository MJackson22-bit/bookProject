import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaEditComponent } from './veterinaria-edit.component';

describe('VeterinariaEditComponent', () => {
  let component: VeterinariaEditComponent;
  let fixture: ComponentFixture<VeterinariaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
