import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonContent,IonFooter, IonText, IonButton, IonToolbar, IonicSlides } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonFooter, IonToolbar,IonContent, RouterLink, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPage implements OnInit {

  onboardingScreens = [
    {image: '1.png'},
    {image: '2.png'},
    {image: '3.png'},
  ];
  SwiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {
  }

}
