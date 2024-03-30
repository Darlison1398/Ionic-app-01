import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDisciplinasPage } from './cadastro-disciplinas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDisciplinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDisciplinasPageRoutingModule {}
