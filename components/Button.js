const template = document.createElement("template");
template.innerHTML = `
<style>
  button {
      color: black;
  }
</style>

<button/>

`;

class Button extends HTMLElement {
  constructor() {
    super();

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
