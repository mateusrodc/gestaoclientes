import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { ToastrService } from 'ngx-toastr';
import { ClientePut } from 'src/app/models/cliente.update';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  clienteForm!: FormGroup;
  clienteId!: string;
  clienteSelecionado!: ClientePut;

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.route.paramMap.subscribe(params => {
      this.clienteId = params.get('id') as string;
      if (this.clienteId) {
        this.clientesService.getClienteById(this.clienteId).subscribe(
          (cliente: ClientePut) => {
            this.clienteSelecionado = cliente;
            this.clienteForm.patchValue(cliente);
          },
          error => {
            this.toastr.error('Erro ao buscar cliente para edição:', error.message);
            this.router.navigate(['/clientes']);
          }
        );
      }
    });
  }

  private inicializarFormulario(): void {
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      fantasia: [null],
      tipo_pessoa: ['Fisica', Validators.required],
      tipo_cadastro: ['Cliente'],
      cadastro_tipo_id: [2],
      cpf_cnpj: ['', [Validators.required, Validators.pattern(/^\d{11}|\d{14}$/)]],
      rg_ie: [''],
      tipo_regime_apuracao: ['Simples'],
      tipo_preco_venda: [''],
      ativo: [true],
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid && this.clienteId) {
      const formValue = this.clienteForm.value;

      const clienteAtualizado: ClientePut = {
        ...formValue,
        id: this.clienteSelecionado.id,
        guid: this.clienteSelecionado.guid,
        dt_inclusao: this.clienteSelecionado.dt_inclusao,
        usuario_inclusao_id: this.clienteSelecionado.usuario_inclusao_id,
        chk_emp_disponivel: this.clienteSelecionado.chk_emp_disponivel,
        desconto_auto_aplicar: this.clienteSelecionado.desconto_auto_aplicar,
        consumidor_final: this.clienteSelecionado.consumidor_final,
        emp_id: this.clienteSelecionado.emp_id,
        cadastro_id: this.clienteSelecionado.cadastro_id,
        cadastro_empresa_id: this.clienteSelecionado.cadastro_empresa_id,
        cadastro_empresa_guid: this.clienteSelecionado.cadastro_empresa_guid,
      };

      this.clientesService.atualizarCliente(this.clienteId, clienteAtualizado).subscribe(
        () => {
          this.toastr.success('Cliente atualizado com sucesso!');
          this.router.navigate(['/clientes']);
        },
        error => {
          this.toastr.error('Erro ao atualizar cliente:', error.message);
        }
      );
    }
  }

  voltar(): void {
    this.router.navigate(['/clientes']);
  }

  get f() {
    return this.clienteForm.controls;
  }
}