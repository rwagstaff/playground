import html from './zooming-input.component.html?raw';
import {gsap} from "gsap";


const template = document.createElement('template');
template.innerHTML = html;



function keyboardLayoutName(layout: string, input: string) {
    if (layout === 'text') {
        return input.length === 0 ? 'shift' : 'default';
    } else {
        return layout;
    }
}


export class ZoomingInputComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));



        const container = this.shadowRoot.querySelector('#form-container');
        const input = this.shadowRoot.querySelector('#firstName') as HTMLInputElement;
        const goBack = this.shadowRoot.querySelector('#goBack');

        goBack?.addEventListener('click', () => {
            console.log('go back');
            //timeline.to(input, {scale: 1, duration: 3, xPercent: 0, yPercent: 0, top: '0%', left: '0%'});
            timeline.reverse();
        });

        input.addEventListener('focus', () => {
            console.log('focus');
            timeline.play();
        });

        const timeline = gsap.timeline({paused: true});

        timeline.to(container, {
            scale: 2,
            duration: 3,
            xPercent: -50,
            yPercent: -50,
            top: '30%',
            left: '50%',
            position: 'absolute',
        });


    }
}