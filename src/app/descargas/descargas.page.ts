import { Component } from '@angular/core';
import { IonCol, IonAvatar, IonImg, IonThumbnail, IonList, IonCard, IonListHeader, IonicSlides, IonContent, IonRow, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.page.html',
  styleUrls: ['./descargas.page.scss'],
  standalone: true,  // Asegura que es un componente standalone
  imports: [IonContent, IonAvatar, IonImg, IonThumbnail, IonCard, IonList, IonListHeader, IonSearchbar, IonRow, IonCol, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge]
})
export class DescargasPage {

  constructor() { }

  // Método futuro para contactar por WhatsApp
  contactWhatsApp() {
    console.log('Contacto por WhatsApp');
    // Aquí puedes agregar la lógica para abrir WhatsApp si lo deseas
    // window.open('https://wa.me/XXXXXXXXX', '_blank');
  }
}
