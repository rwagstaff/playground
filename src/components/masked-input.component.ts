const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
            font-family: sans-serif;
        }
        input {
            font-size: 1em;
            padding: 0.5em;
            width: 100%;
        }
    </style>
    <input type="text">
`;

export class MaskedInputComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: "open"});
        let root = this.shadowRoot as ShadowRoot;
        root.appendChild(template.content.cloneNode(true));
        const input = root.querySelector("input");
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\d/g, "*");
        });
    }
}