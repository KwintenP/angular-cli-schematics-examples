import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdfdComponent } from './qsdfd.component';

describe('QsdfdComponent', () => {
  let component: QsdfdComponent;
  let fixture: ComponentFixture<QsdfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
