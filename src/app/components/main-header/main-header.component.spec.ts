import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MainHeaderComponent } from './main-header.component';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain nav-title', () => {
    const componentDoc: DebugElement = fixture.debugElement;
    const componentElem = componentDoc.query(By.css('#nav-title'))
    const contentValue = componentElem.nativeElement;
    expect(contentValue.textContent).toContain('MKE Virtualization');
  });
  it('should contain main-header item', () => {
    const componentDoc: DebugElement = fixture.debugElement;
    const componentElem = componentDoc.query(By.css('.main-header'))
    const contentValue = componentElem.nativeElement;
    expect(contentValue).toBeTruthy();
  });
  it('should contain logo icon', () => {
    const componentDoc: DebugElement = fixture.debugElement;
    const componentElem = componentDoc.query(By.css('#brand-image'))
    const contentValue = componentElem.nativeElement;
    expect(contentValue).toBeTruthy();
  });
});
