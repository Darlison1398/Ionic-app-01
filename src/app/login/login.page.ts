import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  public email: any;
  public senha: any;

  constructor(private toastController: ToastController, private router: Router) { }

  login() {
    if(this.email === 'darlison@gmail.com'  && this.senha === '123') {
      this.router.navigateByUrl('/tela-inicial');
      this.presentToast('Bem-vindo ao sistema', 'success')

    } else {
      this.presentToast('dandos inocorretos', 'danger')
      this.email = '';
      this.senha = '';
    }
  }

  async presentToast(texto: string, cor: Color) {
    const  toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 3000
    });
    toast.present();
  }

}
