export interface ClientePut {
  id: number;
  nome: string;
  fantasia: string;
  tipo_pessoa: 'Fisica' | 'Juridica';
  tipo_cadastro: 'Cliente' | 'Fornecedor' | string;
  cadastro_tipo_id: number;
  cpf_cnpj: string;
  rg_ie: string;
  tipo_regime_apuracao: string;
  tipo_preco_venda: string;

  // flags e status
  ativo: boolean;
  chk_emp_disponivel: boolean;
  desconto_auto_aplicar: boolean;
  consumidor_final: boolean;

  // relações
  emp_id: number;
  cadastro_id: number;
  cadastro_empresa_id: number;
  cadastro_empresa_guid: string;

  // metadados
  guid: string;
  dt_inclusao: string; // pode tipar como Date se converter
  usuario_inclusao_id: number;
}
