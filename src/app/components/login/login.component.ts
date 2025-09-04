import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/authService/auth.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model = {
    email: '',
    senha: ''
  };

  constructor(
    public router: Router,
    private toastr: ToastrService,
    private authService: AuthService){}

  ngOnInit() {
    if (localStorage.getItem('access_token') !== null) {
      this.router.navigate(['/clientes']);
    }
  }


  login(){

    const payload: Login = {
      email: this.model.email,
      senha: this.model.senha,
      empresa_id: 219, 
      loja_id: 1       
    };

    this.authService.login(payload)
    .subscribe(
      (response) => {
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/clientes']);
        } 
        else {
          this.toastr.error('A resposta do servidor não contém um token válido.');
        }
      },
    error => {
        this.toastr.error('Falha ao tentar logar');
      }
    );
  }
}
