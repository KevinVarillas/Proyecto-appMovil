import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IonApp, IonRouterOutlet,IonTabs, IonImg} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline,cartOutline,personOutline,arrowDownCircleOutline, folderOpenOutline,searchOutline,homeOutline,optionsOutline, flameOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

import { register } from 'swiper/element/bundle';

// Registro de los elementos necesarios de Swiper
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonTabs,IonImg, RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  constructor() {
    addIcons({rocketOutline,cartOutline,personOutline,arrowDownCircleOutline,folderOpenOutline,searchOutline,homeOutline,optionsOutline,flameOutline});

  }
}


