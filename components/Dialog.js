class Dialog extends HTMLElement {
  constructor() {
    super();

    // Crear shadow root
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.setAttribute("class", "modal-container");

    const header = document.createElement("h2");
    header.setAttribute("class", "modalTitle");
    const info = document.createElement("p");

    const openModal = document.createElement("button");
    openModal.innerHTML = this.getAttribute("title");
    openModal.onclick = () => {
      container.classList.add("active");
      bg.classList.add("active");
    };

    const bg = document.createElement("div");
    bg.setAttribute("class", "modal-bg");

    const confirmBtn = document.createElement("button");
    confirmBtn.innerHTML = "Confirm";
    confirmBtn.onclick = () => {
      container.classList.remove("active");
      bg.classList.remove("active");
    };

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";
    closeBtn.onclick = () => {
      container.classList.remove("active");
      bg.classList.remove("active");
    };

    // Atributos
    openModal.innerHTML = this.getAttribute("btn-title");
    header.innerHTML = this.getAttribute("dialog-title");
    info.innerHTML = this.getAttribute("dialog-text");

    // Cargar css
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // Agregar elementos al shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(bg);
    shadow.appendChild(openModal);
    shadow.appendChild(container);
    container.appendChild(header);
    container.appendChild(info);
    container.appendChild(confirmBtn);
    container.appendChild(closeBtn);
  }

  open() {
    this.querySelector(".modal-container").classList.add("active");
  }

  close() {
    this.querySelector(".modal-container").classList.remove("active");
  }

  draggable() {
    window.onload = addListeners();

    function addListeners() {
      this.shadowRoot
        .querySelector(".modal-container")
        .addEventListener("mousedown", mouseDown, false);
      window.addEventListener("mouseup", mouseUp, false);
    }

    function mouseUp() {
      window.removeEventListener("mousemove", divMove, true);
    }

    function mouseDown(e) {
      window.addEventListener("mousemove", divMove, true);
    }

    function divMove(e) {
      var div = this.shaddowRoot.querySelector(".modal-container");
      div.style.position = "absolute";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
    }
  }

  // connectedCallback() {
  //   this.shadowRoot
  //     .querySelector(".modal-container")
  //     .addEventListener("click", () => console.log("ggg"));
  // }

  // disconnectedCallback() {
  //   this.shadowRoot.querySelector(".confirmBtn").removeEventListener();
  // }
}

customElements.define("compo-dialog", Dialog);

export default Dialog;
