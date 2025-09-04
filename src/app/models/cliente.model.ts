export interface Cliente {
  nome: string;
  fantasia: string;
  tipo_pessoa: string;
  tipo_cadastro: string;
  cadastro_grupo_id: number;
  cadastro_tipo_id: number;
  sexo: string;
  estado_civil: string;
  dados_prof_endereco: string;
  dados_prof_endereco_numero: string;
  dados_prof_endereco_bairro: string;
  dados_prof_endereco_cep: string;
  dados_prof_endereco_municipio_codigo_ibge: number;
  tipo_regime_apuracao: string;
  cadastro_empresas: CadastroEmpresa[];
  cadastro_endereco_padrao: CadastroEnderecoPadrao;
  emp_id: number;
  chk_emp_disponivel: boolean;
  cadastro_id: number;
  chk_alterar_nome: boolean;
  desconto_auto_aplicar: boolean;
  desconto_auto_aliq: number;
  obs_nfe: string;
  consumidor_final: boolean;
  tipo_preco_venda: string;
  cadastro_empresa_id: number;
  cadastro_empresa_guid: string;
  ativo: boolean;
  id: number;
  dt_ultima_alteracao: string;
  usuario_ultima_alteracao_id: number;
  usuario_ultima_alteracao_nome?: string;
  dt_inclusao: string;
  usuario_inclusao_id: number;
}

export interface CadastroEmpresa {
  emp_id: number;
  chk_emp_disponivel: boolean;
  cadastro_id: number;
  chk_alterar_nome: boolean;
  desconto_auto_aplicar: boolean;
  desconto_auto_aliq: number;
  obs_nfe: string;
  consumidor_final: boolean;
  tipo_preco_venda: string;
  pgto_bloqueados: string[];
  vendedores_autorizados: any[];
  ativo: boolean;
  id: number;
  dt_ultima_alteracao: string;
  usuario_ultima_alteracao_id: number;
  dt_inclusao: string;
  usuario_inclusao_id: number;
  guid: string;
}

export interface CadastroEnderecoPadrao {
  cadastro_id: number;
  principal: boolean;
  cobranca: boolean;
  descricao: string;
  endereco: string;
  endereco_numero: string;
  endereco_bairro: string;
  endereco_cep: string;
  endereco_municipio_codigo_ibge: number;
  endereco_municipio_descricao: string;
  endereco_uf_sigla: string;
  endereco_uf_codigo: number;
  endereco_municipio_codigo_pais: number;
  endereco_municipio_descricao_pais: string;
  ativo: boolean;
  id: number;
  dt_ultima_alteracao: string;
  usuario_ultima_alteracao_id: number;
  dt_inclusao: string;
  usuario_inclusao_id: number;
}

export interface ApiResponse {
  itens: Cliente[];
  paginacao: Paginacao;
}
export interface Paginacao {
  total_registros: number;
  limit: number;
  offset: number;
  sort: string;
}