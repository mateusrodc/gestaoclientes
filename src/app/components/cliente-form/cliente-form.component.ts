import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  
  clienteForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private clientesService: ClientesService, private router: Router,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required,  Validators.minLength(3)]],
      fantasia: [''],
      tipo_pessoa: ['Fisica', Validators.required],
      cpf_cnpj: ['', [Validators.required, Validators.pattern(/^\d{11}|\d{14}$/)]],
      rg_ie: [''],
      tipo_cadastro: ['Cliente'],
      cadastro_tipo_id: [2],
      tipo_regime_apuracao: ['Simples'],
      tipo_preco_venda: [''],

      cadastro_endereco_padrao: this.fb.group({
        endereco: ['', Validators.required],
        endereco_bairro: [''],
        descricao: ['PRINCIPAL'],
        endereco_numero: [''],
        endereco_cep: ['', Validators.required],
        endereco_municipio_codigo_ibge: [0, Validators.required],
        principal: [false],
        cobranca: [false],
        ie_produtor_rural: ['']
      }),

      cadastro_contato_padrao: this.fb.group({
        descricao: [''],
        fone: ['', Validators.pattern(/^\d{10,11}$/)],
        email: ['', Validators.email],
        enviar_orcamento: [false],
        enviar_nf: [false],
        enviar_boleto: [false]
      })
    });
  }

  onSubmit(){
    this.clienteForm.value.tipo_preco_venda = this.clienteForm.value.tipo_preco_venda?.replace(" ","");
    this.clientesService.novoCliente(this.clienteForm.value).subscribe((retorno)=>{
      this.router.navigate(['/clientes']);
    },error => {
      this.toastr.error('Erro ao criar um cliente');
    })
  }

  voltar(){
    this.router.navigate(['/clientes'])
  }
    get f() {
    return this.clienteForm.controls;
  }
}
