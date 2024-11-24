import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonCol, IonAvatar, IonImg,IonThumbnail,IonList, IonCard, IonListHeader, IonicSlides, IonContent,IonRow, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline,personOutline,arrowDownCircleOutline, folderOpenOutline,searchOutline,homeOutline,optionsOutline, flameOutline } from 'ionicons/icons';
import { Escuela } from '../interfaces/escuela.interface';
import { Curso } from '../interfaces/curso.interface';
import { cursos } from '../data/cursos'
import { escuelas } from '../data/escuelas'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [IonContent,IonAvatar,IonImg,IonThumbnail, IonCard, IonList,IonListHeader, IonSearchbar, IonRow, IonCol, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge, RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ExplorarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
