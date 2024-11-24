import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { IonCol, IonAvatar, IonImg,IonThumbnail,IonList, IonCard, IonListHeader, IonicSlides, IonContent,IonRow, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { AlertController } from '@ionic/angular';
import { rocketOutline,personOutline,arrowDownCircleOutline, folderOpenOutline,searchOutline,homeOutline,optionsOutline, flameOutline } from 'ionicons/icons';
import { Escuela } from '../interfaces/escuela.interface';
import { Curso } from '../interfaces/curso.interface';
import { cursos } from '../data/cursos'
import { escuelas } from '../data/escuelas'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [CommonModule,IonContent,IonAvatar,IonImg,IonThumbnail, IonCard, IonList,IonListHeader, IonSearchbar, IonRow, IonCol, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge, RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class PrincipalPage implements OnInit {
  colors: string[] = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'];

  swiperModules = [IonicSlides];
  cursosrecomendados: Curso[] = [];
  cursoshola: Curso[] = [];
  escuelas: Escuela[]=[];

  constructor(private alertController: AlertController) {
    addIcons({rocketOutline,personOutline,arrowDownCircleOutline,folderOpenOutline,searchOutline,homeOutline,optionsOutline,flameOutline});
   }

 manageSubscription() {
  this.presentAlert('Racha Semanal', 'Mira una clase para empezar tu racha y medir tu progreso estudiando');
}

   ngOnInit():void{
    this.cursoshola = [...cursos];
    this.cursosrecomendados = cursos.sort((a, b) => {
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA;
    });
    this.escuelas = [...escuelas];


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
