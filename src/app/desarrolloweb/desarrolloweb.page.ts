import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Curso } from '../interfaces/curso.interface';
import { cursos } from '../data/cursos'

import { IonContent,IonCol,IonCard, IonLabel,IonCardHeader,IonCardContent,IonBadge,IonicSlides, IonThumbnail,IonCardTitle,IonBackButton,IonGrid, IonRow, IonButtons,IonAvatar, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonCheckbox, IonFab, IonFabButton, IonText, IonButton, IonImg } from '@ionic/angular/standalone'; // Importa IonImg
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desarrolloweb',
  templateUrl: './desarrolloweb.page.html',
  styleUrls: ['./desarrolloweb.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCardHeader,
    IonLabel,
    IonCardTitle,
    IonCard,
    IonBadge,
    IonBackButton,
    IonCardContent,
    IonThumbnail,
    IonRow,
    IonGrid,
    IonCol,
    IonAvatar,
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonIcon,
    IonCheckbox,
    IonFab,
    IonFabButton,
    IonText,
    IonButton,
    IonImg, // Asegúrate de importar IonImg
    CommonModule,
    FormsModule,
    RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class DesarrollowebPage implements OnInit {
  colors: string[] = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'];

  swiperModules = [IonicSlides];
  cursosrecomendados: Curso[] = [];
  cursoshola: Curso[] = [];
  constructor() { }

  ngOnInit():void{
    this.cursoshola = [...cursos];
    this.cursosrecomendados = cursos.sort((a, b) => {
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA;
    });

  }

}
