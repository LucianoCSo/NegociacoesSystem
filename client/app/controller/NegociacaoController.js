class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacao = new Bind(
      new ListaNogociacoes(),
      new NegociacaoView($('#negociacaoView')),
      'adiciona', 'esvazia');

    this._mensagem = new Bind(
      new Mensagem(),
      new mensagemView($('#mensagemView')),
      'texto');
  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacao.adiciona(this._criarNegociacao());
    debugger
    this._mensagem.texto = "Negociação realizada com sucesso.";
    this._limpaFormulario();
  }

  importaNegociacao() {
    let service = new NegociacaoServices();
    Promise.all([
      service.obterNegociacaoSemanal(),
      service.obterNegociacaoSemanalAnterior(),
      service.obterNegociacaoSemanalRetrasada()]
    ).then(negociacoes => {
      negociacoes
        .reduce((arrayPrincipal, array) => arrayPrincipal.concat(array), [])
        .forEach(
          negociacao => this._listaNegociacao.adiciona(negociacao))
    }).catch(erro => this._mensagem.texto = erro)
  }

  _criarNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = '0.0';
    this._inputData.focus();
  }

  apaga() {
    this._listaNegociacao.esvazia();
    this._mensagem.texto = 'Lista de negociaçõe foi apagada.';
  }
}