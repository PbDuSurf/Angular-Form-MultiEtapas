import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapaFinalComponent } from './form-etapa-final.component';

describe('FormEtapaFinalComponent', () => {
  let component: FormEtapaFinalComponent;
  let fixture: ComponentFixture<FormEtapaFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapaFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
