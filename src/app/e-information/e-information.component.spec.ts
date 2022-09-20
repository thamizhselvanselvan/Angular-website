import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformationComponent } from './e-information.component';

describe('EInformationComponent', () => {
  let component: EInformationComponent;
  let fixture: ComponentFixture<EInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
