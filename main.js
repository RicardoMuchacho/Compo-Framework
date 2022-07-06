class Dialog extends HTMLElement {
  constructor() {
    super();

    // Crear shadow root
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const header = document.createElement("h2");
    const info = document.createElement("p");

    const openModal = document.createElement("button");
    openModal.innerHTML = this.getAttribute("btnTitle");

    const openBtn = document.createElement("button");
    openBtn.innerHTML = "Confirm";

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";

    // Atributos
    info.textcontent = this.getAttribute("dialog-text");

    const title = this.getAttribute("dialog-title");
    header.innerHTML = "gg";

    // Cargar css
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // Agregar elementos al shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(container);
    shadow.appendChild(openModal);
    container.appendChild(header);
    container.appendChild(info);
    container.appendChild(openBtn);
    container.appendChild(closeBtn);
  }
}

customElements.define("compo-dialog", Dialog);
