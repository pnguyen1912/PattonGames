import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testgame2Page } from './testgame2.page';

describe('Testgame2Page', () => {
  let component: Testgame2Page;
  let fixture: ComponentFixture<Testgame2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testgame2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testgame2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
