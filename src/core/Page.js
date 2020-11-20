export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('Method "geRoot" should be implemented')
  }

  afterRender() {}

  destroy() {}
}
