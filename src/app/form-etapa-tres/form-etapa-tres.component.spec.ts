import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapaTresComponent } from './form-etapa-tres.component';

describe('FormEtapaTresComponent', () => {
  let component: FormEtapaTresComponent;
  let fixture: ComponentFixture<FormEtapaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
