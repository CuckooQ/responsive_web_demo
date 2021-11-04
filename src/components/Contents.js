import MainContents from "./MainContents.js";
import SubContents from "./SubContents.js";

class Contents {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <div class="main-contents"></div>
      <div class="sub-contents"></div>
    `;
  }

  mounted() {
    const mainContentsEl = document.querySelector(".main-contents");
    new MainContents(mainContentsEl);
    const subContentsEl = document.querySelector(".sub-contents");
    new SubContents(subContentsEl);
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Contents;
