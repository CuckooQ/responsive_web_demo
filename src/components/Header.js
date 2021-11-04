import NavigationMenu from "./NavigationMenu.js";
import Logo from "./Logo.js";
import Title from "./Titile.js";

class Header {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <div class="logo-wrapper"></div>
      <div class="title-wrapper"></div>
      <div class="nav-wrapper"></div>
    `;
  }

  mounted() {
    const logoEl = document.querySelector(".logo-wrapper");
    new Logo(logoEl);
    const titleEl = document.querySelector(".title-wrapper");
    new Title(titleEl);
    const navEl = document.querySelector(".nav-wrapper");
    new NavigationMenu(navEl);
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Header;
