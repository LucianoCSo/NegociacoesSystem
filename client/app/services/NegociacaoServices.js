class NegociacaoServices {
  obterNegociacaoSemanal() {
    let xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('GET', 'negociacoes/semana');
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(x => new Negociacao(
                new Date(x.data), x.quantidade, x.valor
              )));
          } else {
            console.log(xhr.responseText)
            reject('Erro ao tentar importar negociações.')
          }
        }
      }
      xhr.send();
    });
  }

  obterNegociacaoSemanalAnterior() {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', 'negociacoes/anterior');
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(x => new Negociacao(
                new Date(x.data), x.quantidade, x.valor
              )));
          } else {
            console.log(xhr.responseText)
            reject('Erro ao tentar importar negociações.')
          }
        }
      }
      xhr.send();
    });
  }

  obterNegociacaoSemanalRetrasada() {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', 'negociacoes/retrasada');
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(x => new Negociacao(
                new Date(x.data), x.quantidade, x.valor
              )));
          } else {
            console.log(xhr.responseText)
            reject('Erro ao tentar importar negociações.')
          }
        }
      }
      xhr.send();
    });
  }
}