import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonCheckbox, IonFab, IonFabButton, IonText, IonButton, IonImg } from '@ionic/angular/standalone'; // Importa IonImg
import { RouterModule } from '@angular/router';
import { mailOutline, lockClosedOutline, personOutline, calendarOutline, chevronForward } from 'ionicons/icons'; // Importa los íconos necesarios

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonContent,
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
  ]
})
export class SignupPage implements OnInit {
  icons = { mailOutline, lockClosedOutline, personOutline, calendarOutline, chevronForward }; // Asigna los íconos a una propiedad

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    // Implementa aquí la lógica para el envío del formulario
    console.log('Formulario enviado');
  }
}
