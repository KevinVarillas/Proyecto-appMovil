import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonCheckbox, IonFab, IonFabButton, IonText, IonButton, IonImg } from '@ionic/angular/standalone'; // Asegúrate de importar IonImg
import { RouterModule } from '@angular/router';
import { mailOutline, lockClosedOutline, personOutline, chevronForward } from 'ionicons/icons'; // Importa los íconos necesarios

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
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
export class LoginPage implements OnInit {
  form!: FormGroup;
  icons = { mailOutline, lockClosedOutline, personOutline, chevronForward }; // Añade chevronForward a los íconos
  forgotPasswordChecked: boolean = false; // Declara la propiedad

  constructor() {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  togglePwd() {
    // Implementa tu lógica para alternar la visibilidad de la contraseña aquí
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
