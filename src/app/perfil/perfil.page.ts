import { IonContent, IonLabel, IonHeader, IonButtons, IonAvatar, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonCheckbox, IonFab, IonFabButton, IonText, IonButton, IonImg } from '@ionic/angular/standalone'; // Asegúrate de importar IonImg
import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  standalone: true,  // Agregar esta propiedad
  imports: [
    IonContent,
    IonLabel,
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
    IonImg, // Importa IonImg
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PerfilPage {

  constructor() {
    addIcons({settingsOutline});

  }

  goHome() {
    // Aquí podrías agregar la lógica para redirigir al inicio
    console.log('Redirigiendo al inicio...');
  }

  subscribeToExpert() {
    // Aquí podrías agregar la lógica para la suscripción
    console.log('Suscribiendo a Expert...');
  }
}
