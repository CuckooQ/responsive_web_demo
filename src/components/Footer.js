class Footer {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <div>&copy; Responsive Web Study</div>
    `;
  }

  mounted() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Footer;
