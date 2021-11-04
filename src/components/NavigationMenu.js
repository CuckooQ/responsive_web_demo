class NavigationMenu {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <nav>
        <a href="#section1">Section1</a>
        <a href="#section2">Section2</a>
        <a href="#section3">Section3</a>
      </nav>
    `;
  }

  render() {
    this.target.innerHTML = this.template();
  }
}

export default NavigationMenu;
