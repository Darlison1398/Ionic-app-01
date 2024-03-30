import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDisciplinasPageRoutingModule } from './cadastro-disciplinas-routing.module';

import { CadastroDisciplinasPage } from './cadastro-disciplinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDisciplinasPageRoutingModule
  ],
  declarations: [CadastroDisciplinasPage]
})
export class CadastroDisciplinasPageModule {}
