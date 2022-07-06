const template = document.createElement("template");

//el css debe importarse dinamicamente no aqui, igual con el div y buton hay que cambiarlo
//a document.createElement como sale abajo
template.innerHTML = `
<div>
<button class='btn red-btn'/>
</div>
`;

class Button extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");
    shadow.appendChild(linkElem);

    this.shadowRoot.querySelector("button").innerText =
      this.getAttribute("title");

    this.shadowRoot.querySelector("button").onclick =
      this.getAttribute("onclick");
  }

  changeColor() {
    const btn = this.shadowRoot.querySelector(".btn");
    if (btn.classList.contains("red-btn")) {
      btn.setAttribute("class", "btn yellow-btn");
    } else {
      btn.setAttribute("class", "btn red-btn");
    }
  }
  connectedCallback() {
    this.shadowRoot
      .querySelector(".btn")
      .addEventListener("click", () => this.changeColor());
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector(".btn").removeEventListener();
  }
}

window.customElements.define("compo-button", Button);

export default Button;
