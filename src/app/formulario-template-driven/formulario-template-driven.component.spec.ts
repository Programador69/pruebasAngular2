import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemplateDrivenComponent } from './formulario-template-driven.component';

describe('FormularioTemplateDrivenComponent', () => {
  let component: FormularioTemplateDrivenComponent;
  let fixture: ComponentFixture<FormularioTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
