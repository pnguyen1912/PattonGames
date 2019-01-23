import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgamePage } from './testgame.page';

describe('TestgamePage', () => {
  let component: TestgamePage;
  let fixture: ComponentFixture<TestgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
