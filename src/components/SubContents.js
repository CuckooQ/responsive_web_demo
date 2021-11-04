class SubContents {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <section>
        <h2>Sub Section</h2>
        <span> <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
      </section>
    `;
  }

  mounted() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default SubContents;
