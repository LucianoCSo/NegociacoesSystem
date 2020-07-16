class NegociacaoServices {
  constructor() {
    this._http = new HttpService();
  }

  obterNegociacaoSemanal() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(x => new Negociacao(
            new Date(x.data), x.quantidade, x.valor
          )))
        }).catch(erro => {
          console.log(erro)
          reject('Não foi posivel buscar as negociações da semana.')
        })
    });
  }

  obterNegociacaoSemanalAnterior() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/anterior')
      .then(negociacoes => {
        resolve(negociacoes.map(x => new Negociacao(
          new Date(x.data), x.quantidade, x.valor
        ))).catch(erro => {
          console.log(erro)
          reject('Não foi posivel buscar as negociações da semana anterior.')
        })
      })
    });
  }

  obterNegociacaoSemanalRetrasada() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/retrasada')
      .then(negociacoes => {
        resolve(negociacoes.map(x => new Negociacao(
          new Date(x.data), x.quantidade, x.valor
        ))).catch(erro => {
          console.log(erro)
          reject('Não foi posivel buscar as negociações da semana retrasada.')
        })
      })
    });
  }
}