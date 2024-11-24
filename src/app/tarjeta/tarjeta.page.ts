import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.page.html',
  styleUrls: ['./tarjeta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]

})
export class TarjetaPage {

  card = {
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    country: 'PE',
    address: '',
    suite: '',
    district: ''
  };

  constructor() { }

  saveCard() {
    console.log('Tarjeta guardada:', this.card);
    // Aquí puedes agregar lógica para guardar la tarjeta
  }
}


