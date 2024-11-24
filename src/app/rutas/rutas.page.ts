import { Component } from '@angular/core';
import { IonCol, IonAvatar, IonImg, IonThumbnail, IonList, IonCard, IonListHeader, IonicSlides, IonContent, IonRow, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge } from '@ionic/angular/standalone';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
  standalone: true,  // Asegura que es un componente standalone
  imports: [IonContent, IonAvatar, IonImg, IonThumbnail, IonCard, IonList, IonListHeader, IonSearchbar, IonRow, IonCol, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge]

})
export class RutasPage{

  constructor() { }

  ngOnInit() {
  }

}
