import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdfComponent } from './qsdf.component';

describe('QsdfComponent', () => {
  let component: QsdfComponent;
  let fixture: ComponentFixture<QsdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
