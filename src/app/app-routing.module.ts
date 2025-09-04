import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GuardService } from './services/authGuard/guard.service'
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [GuardService]},
  { path: 'novocliente', component: ClienteFormComponent , canActivate: [GuardService]},
  { path: 'editarcliente/:id', component: ClienteEditComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
