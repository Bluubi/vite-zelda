import template from './app.html?raw';

export class AppElement extends HTMLElement {

    connectedCallback(){
        console.log('me he iniciado!')
        this.innerHTML = template;
    }
}

customElements.define('app-element', AppElement);