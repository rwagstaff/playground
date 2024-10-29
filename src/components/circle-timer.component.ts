import {gsap} from "gsap";
import {c} from "vite/dist/node/types.d-aGj9QkWt";


const template = document.createElement('template');
template.innerHTML = `
<style>
.circular-pbar {
    background: conic-gradient(darkred 33%, 0, black)
}
</style>
<div class="circular-pbar"></div>
`;

export class CircleTimerComponent extends HTMLElement {
    connectedCallback() {
        const primary = '#FFA500';
        this.attachShadow({mode: 'open'});
        const circle = this.shadowRoot.getElementById('.circular-pbar');
        gsap.to(circle, {
            duration: 4,
            ease: 'expo.out'
        });


    }
}