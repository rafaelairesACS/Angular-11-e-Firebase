import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel.component';
import { AuthguardService } from 'src/app/services/authguard.service';

const routes: Routes = [
  { path: '', component: PainelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
