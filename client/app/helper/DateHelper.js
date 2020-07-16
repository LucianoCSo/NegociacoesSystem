class DateHelper {
  constructor() {
    throw new Error('DateHelper não pode ser instanciada.');
  }
  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Data deve estar no formato ano-mes-dia');
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
  }
  static dataParaTexto(data) {
    return `${
              ('0' + data.getDate()).slice(-2)
            }/${
              ('0' + (data.getMonth() + 1)).slice(-2)
            }/${data.getFullYear()}`
  }
}