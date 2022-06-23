let btnOne = document.getElementById("btnOne");
let inpEdit = document.getElementById("inpEdit");
let zoneOne = document.getElementById("zoneOne");
let zoneTwo = document.getElementById("zoneTwo");
let zoneMagica = document.getElementById("zoneMagica");
let semaforo = true;

function changeColorButton() {
    if (btnOne.classList.contains("btn-state-one")) {
        btnOne.setAttribute("class", "btn-state-two");
    } else {
        btnOne.setAttribute("class", "btn-state-one");
    }
}

function changeColorInput() {
    if (inpEdit.classList.contains("inp-state-one")) {
        inpEdit.setAttribute("class", "inp-state-two");
    } else {
        inpEdit.setAttribute("class", "inp-state-one");
    }
}

function loadComponents() {
    if (semaforo) {
        zoneMagica.innerHTML = "";
        zoneMagica.append(btnOne, inpEdit);
        semaforo = false;
    } else {
        zoneMagica.innerHTML = "";
        zoneOne.append(btnOne);
        zoneTwo.append(inpEdit);
        semaforo = true;
    }
}