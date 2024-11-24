import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonFab, IonFabButton, IonButton, IonText, IonImg } from '@ionic/angular/standalone'; // Importa IonImg
import { RouterModule } from '@angular/router';
import { mailOutline, lockClosedOutline, personOutline, chevronForward } from 'ionicons/icons'; // Importa los íconos necesarios

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonIcon,
    IonFab,
    IonFabButton,
    IonButton,
    IonText,
    IonImg, // Asegúrate de importar IonImg
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ResetPasswordPage implements OnInit {
  icons = { mailOutline, lockClosedOutline, personOutline, chevronForward }; // Asigna los íconos a una propiedad

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // Aquí puedes agregar la lógica de envío del formulario
    console.log('Formulario enviado');
  }
}
