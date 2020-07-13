class Observador{

    constructor(){
        this.observer = [];
    }

    suscribe(data){
        this.observer.push(data);
    }

    notify(data){
        this.observer.forEach(ob => ob.value = data);
    }

}

const txtPrincipal = document.getElementById("principal");
const txtUno = document.getElementById("uno");
const txtDos = document.getElementById("dos");
const txtTres = document.getElementById("tres");

const observador = new Observador();
observador.suscribe(txtUno);
observador.suscribe(txtDos);
observador.suscribe(txtTres);

txtPrincipal.addEventListener('keyup',(event) => observador.notify(event.target.value));
