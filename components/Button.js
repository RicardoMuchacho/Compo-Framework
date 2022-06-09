const template = document.createElement("template");

//el css debe importarse dinamicamente no aqui, igual con el div y buton hay que cambiarlo
//a document.createElement como sale abajo
template.innerHTML = `
<style>
div{
  display: flex;
  justify-content: center;
}
  button {
      color: black;
  }
</style>
<div>
<button/>
</div>
`;

class Button extends HTMLElement {
  constructor() {
    super();

    //this.container = document.createElement('div');
    //this.button = document.createElement('button');
    //this.container.appendChild(this.button)

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("button").innerText =
      this.getAttribute("title");

    this.shadowRoot.querySelector("button").onclick =
      this.getAttribute("onclick");
    //this.innerHTML = `${this.getAttribute("title")}`;
  }

  /*
  clickButton() {
    alert("button clicked");
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#click-button")
      .addEventListener("click", () => this.clickButton());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#click-button").removeEventListener();
  }*/
}

window.customElements.define("compo-button", Button);

export default Button;
