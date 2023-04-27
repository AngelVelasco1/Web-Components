class dogListComponent extends HTMLElement {
    constructor() {
        /* Llama al constructor padre */
        super();
        this.name = this.getAttribute('name')
        this.innerHTML = `The dog is ${this.name}`
    }
}
customElements.define('dog-list', dogListComponent);

class customButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            alert("Hi from custom button")
        });
    }
}
customElements.define('console-button', customButton, {extends: 'button'});

class gallery extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

    }
}