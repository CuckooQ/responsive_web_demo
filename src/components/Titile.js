class Title {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `<h1 class="title">Responsive Web<h1>`;
  }

  mounted() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Title;
