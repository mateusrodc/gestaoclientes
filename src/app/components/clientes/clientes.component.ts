import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { ApiResponse, Cliente, Paginacao } from 'src/app/models/cliente.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public listaClientes: Array<Cliente> = [];
  public paginacao!: Paginacao;
  public Math = Math;

  constructor(private clientesService: ClientesService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getClientes(0);
  }

  getClientes(offset: number) {
    this.clientesService.getClientes(10, offset).subscribe({
      next: (response: ApiResponse) => {
        this.listaClientes = response.itens;
        this.paginacao = response.paginacao;
      },
      error: () => {
        this.toastr.error('Erro ao buscar clientes');
      }
    });
  }
  novoCliente(){
    this.router.navigate(['/novocliente'])
  }
  editarCliente(cliente: Cliente){
    this.router.navigate(['editarcliente', cliente.id])
  }

  excluirCliente(id: number){}
 
  nextPage() {
    const newOffset = this.paginacao.offset + this.paginacao.limit;
    if (newOffset < this.paginacao.total_registros) {
      this.getClientes(newOffset);
    }
  }

  prevPage() {
    const newOffset = this.paginacao.offset - this.paginacao.limit;
    if (newOffset >= 0) {
      this.getClientes(newOffset);
    }
  }

  sair(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }
}