import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapaDoisComponent } from './form-etapa-dois.component';

describe('FormEtapaDoisComponent', () => {
  let component: FormEtapaDoisComponent;
  let fixture: ComponentFixture<FormEtapaDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapaDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
