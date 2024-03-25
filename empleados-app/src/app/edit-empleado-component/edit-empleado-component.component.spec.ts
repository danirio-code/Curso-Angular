import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpleadoComponentComponent } from './edit-empleado-component.component';

describe('EditEmpleadoComponentComponent', () => {
  let component: EditEmpleadoComponentComponent;
  let fixture: ComponentFixture<EditEmpleadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpleadoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
