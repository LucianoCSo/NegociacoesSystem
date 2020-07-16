class Bind {
  constructor(model, view, ...props) {
    let proxy = ProxFactory.createProxy(model, props, model =>
      view.update(model));

    view.update(model);
    return proxy;
  }
}