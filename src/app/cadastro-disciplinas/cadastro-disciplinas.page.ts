import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-cadastro-disciplinas',
  templateUrl: './cadastro-disciplinas.page.html',
  styleUrls: ['./cadastro-disciplinas.page.scss'],
})
export class CadastroDisciplinasPage implements OnInit {

  public temas =[
    { tema: 'Banco de dados', isChecked: false },
    { tema: 'Design Web', isChecked: false },
    { tema: 'Programação', isChecked: false },
    { tema: 'Mobile', isChecked: false },
    { tema: 'Teste', isChecked: false },
    { tema: 'Redes', isChecked: false },
    { tema: 'POO', isChecked: false },
    { tema: 'Web', isChecked: false },
    { tema: 'UX', isChecked: false },
    { tema: 'UI', isChecked: false },
  ]


  public nome: any;
  public semestre: any;
  public materiasSelecionadas: string[] = [];

  public dadosFormulario: any = {};

  constructor( private toastController: ToastController, private router: Router ) { }

  ngOnInit() {
  }

  cadastrar(){

    if (!this.nome) {
      this.presentToast('Por favor, digite seu nome!', 'danger');

    } else if (!this.semestre) {
      this.presentToast('Por favor, selecione o semestre!', 'danger');

    } else if (!this.materiasSelecionadas) {
      this.presentToast('Por favor, selecione as matérias!', 'danger');
    
    } else {
      this.dadosFormulario.nome = this.nome;
      this.dadosFormulario.semestre = this.semestre;
      this.materiasSelecionadas = this.temas.filter(item => item.isChecked).map(item => item.tema);
      this.dadosFormulario.materiasSelecionadas = this.materiasSelecionadas;
  
      //console.log(this.dadosFormulario);
      this.router.navigateByUrl('/perfil',  { state: { dadosFormulario: this.dadosFormulario } });
      this.presentToast('Matrícula realizada com sucesso!', 'success');

      this.nome = '';
      this.semestre = '';
      this.temas.forEach(item => item.isChecked = false);

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
