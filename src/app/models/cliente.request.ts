export interface ClientePost {
  nome: string;
  fantasia: string;
  tipo_pessoa: string;
  tipo_cadastro: string;
  cadastro_tipo_id: number;
  cpf_cnpj: string;
  rg_ie: string;
  tipo_regime_apuracao: string;
  tipo_preco_venda: string;
  ativo: boolean;
  cadastro_endereco_padrao: {
    descricao: string;
    endereco: string;
    endereco_numero: string;
    endereco_bairro: string;
    endereco_cep: string;
    endereco_municipio_codigo_ibge: number;
    principal: boolean;
    cobranca: boolean;
    ie_produtor_rural: string;
  };
  cadastro_contato_padrao: {
    descricao: string;
    fone: string;
    email: string;
    enviar_orcamento: boolean;
    enviar_nf: boolean;
    enviar_boleto: boolean;
  };
}