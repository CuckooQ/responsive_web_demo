class Logo {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <a target="_blank" href="https://github.com/CuckooQ/">
        <img class="logo" src="../../static/Logo.png" alt="logo">
      </a>
    `;
  }

  mounted() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Logo;
