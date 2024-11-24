import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoescuPage } from './infoescu.page';

describe('InfoescuPage', () => {
  let component: InfoescuPage;
  let fixture: ComponentFixture<InfoescuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoescuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
