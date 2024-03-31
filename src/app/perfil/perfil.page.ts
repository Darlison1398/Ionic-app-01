import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  dadosFormulario: any;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.dadosFormulario = history.state.dadosFormulario;
    
  }

}
