import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Cliente } from 'src/app/models/cliente.model';
import { ClientePost } from 'src/app/models/cliente.request';
import { ClientePut } from 'src/app/models/cliente.update';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(limit: number, offset: number): Observable<ApiResponse> {
      let params = new HttpParams()
        .set('limit', limit.toString())
        .set('offset', offset.toString())
    return this.http.get<ApiResponse>(`${environment.apiBaseUrl}Cadastro`, { params: params });
  }

  novoCliente(cliente: ClientePost): Observable<any>{
    return this.http.post<any>(`${environment.apiBaseUrl}Cadastro`, cliente);
  }

  getClienteById(id: string): Observable<ClientePut>{
    return this.http.get<ClientePut>(`${environment.apiBaseUrl}Cadastro/${id}`)
  }

  atualizarCliente(id: string, cliente: any): Observable<void> {
    return this.http.put<any>(`${environment.apiBaseUrl}Cadastro/${id}`, cliente);
  }
}
