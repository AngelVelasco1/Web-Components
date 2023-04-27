/* Basic Example */
class dogListComponent extends HTMLElement {
    constructor() {
        /* Llama al constructor padre */
        super();
        this.name = this.getAttribute('name')
        this.innerHTML = `The dog is ${this.name}`
    }
}
customElements.define('dog-list', dogListComponent);
/* Intermediate example */
class customButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            alert("Hi from custom button")
        });
    }
}
customElements.define('console-button', customButton, {extends: 'button'});
/* Advanced Example */
class gallery extends HTMLElement {
    constructor() {
        super();
        const galleryTemplate = document.querySelector('#gallery-template').content
        const shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.appendChild(galleryTemplate.cloneNode(true))
    }
}
customElements.define('my-gallery', gallery);