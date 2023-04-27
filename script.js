class dogListComponent extends HTMLElement {
    constructor() {
        /* Llama al constructor padre */
        super();
        this.name = this.getAttribute('name')
        this.innerHTML = `The dog is ${this.name}`
    }
}

customElements.define('dog-list', dogListComponent)