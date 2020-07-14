/*class Observador{


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
*/

class Observador{
    constructor(){
        this.observers= [];
        this.observersL= [];
    }

    suscribe(data){
        this.observers.push(data);
    }
    suscribeL(data){
        this.observersL.push(data);
    }

    notify(data){
        this.observers.forEach(ob => ob.value = data);
        this.observersL.forEach(ob => ob.innerHTML = data);
    }
}

const txtPrincipal = document.getElementById("principal");
const txtUno = document.getElementById("uno");
const txtDos = document.getElementById("dos");
const label1 = document.getElementById("label1");

const observador = new Observador();

observador.suscribe(txtUno);
observador.suscribe(txtDos);
observador.suscribeL(label1);

txtPrincipal.addEventListener('keyup',(event) => observador.notify(event.target.value));