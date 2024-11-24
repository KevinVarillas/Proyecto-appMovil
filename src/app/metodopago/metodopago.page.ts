import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.page.html',
  styleUrls: ['./metodopago.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule,RouterLink]
})
export class MetodopagoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
