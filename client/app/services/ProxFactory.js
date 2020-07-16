class ProxFactory {
  static createProxy(objeto, props, acao) {
    return new Proxy(objeto, {
        get(target, prop, receiver) {
          if (props.includes(prop) &&
            ProxFactory._eFuncao(target[prop])) {
            return function () {
              Reflect.apply(target[prop], target, arguments);
              return acao(target);
            }
          }
          return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
          let retorno = Reflect.set(target, prop, value, receiver);
          if (props.includes(prop)) acao(target)
          return retorno;
        }
    });
  }

  static _eFuncao(func) {
    return typeof (func) == typeof (Function)
  }
}