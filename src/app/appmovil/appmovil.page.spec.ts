import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppmovilPage } from './appmovil.page';

describe('AppmovilPage', () => {
  let component: AppmovilPage;
  let fixture: ComponentFixture<AppmovilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmovilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
