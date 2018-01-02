import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestessComponent } from './testess.component';

describe('TestessComponent', () => {
  let component: TestessComponent;
  let fixture: ComponentFixture<TestessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
