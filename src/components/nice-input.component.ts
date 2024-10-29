import html from './nice-input.component.html?raw';

const template = document.createElement('template');
template.innerHTML = html;

export class NiceInputComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.input-effect input').addEventListener('focus', (event: FocusEvent) => {
            this.shadowRoot.querySelector('.input-effect').classList.add('has-content');
        });
        this.shadowRoot.querySelector('.input-effect input').addEventListener('focusout', (event: FocusEvent) => {

            this.shadowRoot.querySelector('.input-effect').classList.remove('has-content');

        });

    }
}

