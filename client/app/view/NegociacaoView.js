class NegociacaoView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return `
        <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>         
          <tbody>
             ${model.negociacoes.map(x => `
                 <tr>
                     <td>${DateHelper.dataParaTexto(x.data)}</td>
                     <td>${x.quantidade}</td>
                     <td>${x.valor}</td>
                     <td>${x.volume}</td>
                 </tr>
              `).join('')
      }
          </tbody>
          <tfoot>
              <td colspan="3">TOTAL</td>
              <td>
                ${model.negociacoes.reduce((total, x) => total + x.volume, 0.0)}
              </td>
          </tfoot>
        </table> 
    `
  }
}