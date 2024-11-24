import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonContent, IonBackButton, IonList, IonLabel, IonNote, IonHeader, IonButtons, IonAvatar, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonCheckbox, IonFab, IonFabButton, IonText, IonButton, IonImg } from '@ionic/angular/standalone'; // Asegúrate de importar IonImg
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-infoescu',
  templateUrl: './infoescu.page.html',
  styleUrls: ['./infoescu.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonLabel,
    IonBackButton,
    IonNote,
    IonList,
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
export class InfoescuPage {
  cacheSize: number = 13.5; 
  otherDataSize: number = 50.85;
  freeSpace: number = 53.38;

  constructor(private alertController: AlertController) {}
 manageSubscription() {
  this.presentAlert('Subscription', 'Administrar tu suscripción desde Platzi.');
}

clearCache() {
  this.cacheSize = 0;
  this.presentAlert('Caché eliminada', 'La caché ha sido eliminada con éxito.');
}


async presentAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
  });
  await alert.present();
}

}
