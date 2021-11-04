import Header from "./Header.js";
import Contents from "./Contents.js";
import Footer from "./Footer.js";

class App {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <header></header>
      <main></main>
      <footer></footer>
    `;
  }

  mounted() {
    const headerEl = document.querySelector("header");
    new Header(headerEl);
    const footerEl = document.querySelector("footer");
    new Footer(footerEl);
    const mainEl = document.querySelector("main");
    new Contents(mainEl);
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default App;
