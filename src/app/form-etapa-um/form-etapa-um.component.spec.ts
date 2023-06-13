import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtapaUmComponent } from './form-etapa-um.component';

describe('FormEtapaUmComponent', () => {
  let component: FormEtapaUmComponent;
  let fixture: ComponentFixture<FormEtapaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtapaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEtapaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
