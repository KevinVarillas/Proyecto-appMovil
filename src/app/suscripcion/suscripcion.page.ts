import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Ya importa todos los componentes de Ionic
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { mailOutline, lockClosedOutline, personOutline, chevronForward } from 'ionicons/icons'; // Importa los íconos necesarios

@Component({
  selector: 'app-suscripcion',
  templateUrl: 'suscripcion.page.html',
  styleUrls: ['suscripcion.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Este importa todos los componentes de Ionic
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink
  ]
})
export class SuscripcionPage {
  constructor() {}

  subscribeToExpert() {
    console.log('Suscribiendo a Expert...');
  }
}
