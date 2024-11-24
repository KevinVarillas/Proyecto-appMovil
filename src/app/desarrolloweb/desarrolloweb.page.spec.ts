import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrollowebPage } from './desarrolloweb.page';

describe('DesarrollowebPage', () => {
  let component: DesarrollowebPage;
  let fixture: ComponentFixture<DesarrollowebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrollowebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
