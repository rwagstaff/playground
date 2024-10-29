import {gsap} from "gsap";
import {s} from "vite/dist/node/types.d-aGj9QkWt";


const template = document.createElement('template');
template.innerHTML = `

<svg width="220" height="220" viewBox="-10 -10 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="corner" d="M0.5 17.333C0.5 12.9569 2.23839 8.7601 5.33274 5.66575C8.42709 2.5714 12.6239 0.833008 17 0.833008H21.5C22.6935 0.833008 23.8381 1.30711 24.682 2.15103C25.5259 2.99494 26 4.13953 26 5.33301C26 6.52648 25.5259 7.67108 24.682 8.51499C23.8381 9.3589 22.6935 9.83301 21.5 9.83301H17C12.86 9.83301 9.5 13.193 9.5 17.333V21.833C9.5 23.0265 9.02589 24.1711 8.18198 25.015C7.33807 25.8589 6.19347 26.333 5 26.333C3.80653 26.333 2.66193 25.8589 1.81802 25.015C0.974105 24.1711 0.5 23.0265 0.5 21.833V17.333Z" fill="#A6ABAB"/>
    <path class="corner" d="M71 5.33301C71 4.13953 71.4741 2.99494 72.318 2.15103C73.1619 1.30711 74.3065 0.833008 75.5 0.833008H80C84.3761 0.833008 88.5729 2.5714 91.6673 5.66575C94.7616 8.7601 96.5 12.9569 96.5 17.333V21.833C96.5 23.0265 96.0259 24.1711 95.182 25.015C94.3381 25.8589 93.1935 26.333 92 26.333C90.8065 26.333 89.6619 25.8589 88.818 25.015C87.9741 24.1711 87.5 23.0265 87.5 21.833V17.333C87.5 13.193 84.14 9.83301 80 9.83301H75.5C74.3065 9.83301 73.1619 9.3589 72.318 8.51499C71.4741 7.67108 71 6.52648 71 5.33301Z" fill="#A6ABAB"/>
    <path class="corner" d="M5 59.333C6.19347 59.333 7.33807 59.8071 8.18198 60.651C9.02589 61.4949 9.5 62.6395 9.5 63.833V68.333C9.5 72.473 12.86 75.833 17 75.833H21.5C22.6935 75.833 23.8381 76.3071 24.682 77.151C25.5259 77.995 26 79.1395 26 80.333C26 81.5265 25.5259 82.6711 24.682 83.515C23.8381 84.3589 22.6935 84.833 21.5 84.833H17C12.6239 84.833 8.42709 83.0946 5.33274 80.0003C2.23839 76.9059 0.5 72.7091 0.5 68.333V63.833C0.5 62.6395 0.974105 61.4949 1.81802 60.651C2.66193 59.8071 3.80653 59.333 5 59.333Z" fill="#A6ABAB"/>
    <path class="corner" d="M92 59.333C93.1935 59.333 94.3381 59.8071 95.182 60.651C96.0259 61.4949 96.5 62.6395 96.5 63.833V68.333C96.5 72.7091 94.7616 76.9059 91.6673 80.0003C88.5729 83.0946 84.3761 84.833 80 84.833H75.5C74.3065 84.833 73.1619 84.3589 72.318 83.515C71.4741 82.6711 71 81.5265 71 80.333C71 79.1395 71.4741 77.995 72.318 77.151C73.1619 76.3071 74.3065 75.833 75.5 75.833H80C84.14 75.833 87.5 72.473 87.5 68.333V63.833C87.5 62.6395 87.9741 61.4949 88.818 60.651C89.6619 59.8071 90.8065 59.333 92 59.333Z" fill="#A6ABAB"/>
    <path id="l1" class="line" d="M21.5 22.583C22.6935 22.583 23.8381 23.0571 24.682 23.901C25.5259 24.7449 26 25.8895 26 27.083V58.583C26 59.7765 25.5259 60.9211 24.682 61.765C23.8381 62.6089 22.6935 63.083 21.5 63.083C20.3065 63.083 19.1619 62.6089 18.318 61.765C17.4741 60.9211 17 59.7765 17 58.583V27.083C17 25.8895 17.4741 24.7449 18.318 23.901C19.1619 23.0571 20.3065 22.583 21.5 22.583Z" fill="#A6ABAB"/>
    <path id="l2" class="line" d="M44 23.333C44 22.1395 43.5259 20.9949 42.682 20.151C41.8381 19.3071 40.6935 18.833 39.5 18.833C38.3065 18.833 37.1619 19.3071 36.318 20.151C35.4741 20.9949 35 22.1395 35 23.333V62.333C35 63.5265 35.4741 64.6711 36.318 65.515C37.1619 66.3589 38.3065 66.833 39.5 66.833C40.6935 66.833 41.8381 66.3589 42.682 65.515C43.5259 64.6711 44 63.5265 44 62.333V23.333Z" fill="#A6ABAB"/>
    <path id="l3" class="line" d="M57.5 22.583C58.6935 22.583 59.8381 23.0571 60.682 23.901C61.5259 24.7449 62 25.8895 62 27.083V58.583C62 59.7765 61.5259 60.9211 60.682 61.765C59.8381 62.6089 58.6935 63.083 57.5 63.083C56.3065 63.083 55.1619 62.6089 54.318 61.765C53.4741 60.9211 53 59.7765 53 58.583V27.083C53 25.8895 53.4741 24.7449 54.318 23.901C55.1619 23.0571 56.3065 22.583 57.5 22.583Z" fill="#A6ABAB"/>
    <path id="l4" class="line" d="M80 23.333C80 22.1395 79.5259 20.9949 78.682 20.151C77.8381 19.3071 76.6935 18.833 75.5 18.833C74.3065 18.833 73.1619 19.3071 72.318 20.151C71.4741 20.9949 71 22.1395 71 23.333V62.333C71 63.5265 71.4741 64.6711 72.318 65.515C73.1619 66.3589 74.3065 66.833 75.5 66.833C76.6935 66.833 77.8381 66.3589 78.682 65.515C79.5259 64.6711 80 63.5265 80 62.333V23.333Z" fill="#A6ABAB"/>
</svg>
`;

export class ScanItemsComponent extends HTMLElement {
    connectedCallback() {
        const primary = '#FFA500';
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // const lines = this.shadowRoot?.querySelectorAll('.line');
        // const lines2 = this.shadowRoot?.querySelectorAll('.line2');
        // const corners = this.shadowRoot?.querySelectorAll('.corner');

        const l1 = this.shadowRoot.querySelector('#l1');
        const l2 = this.shadowRoot.querySelector('#l2');
        const l3 = this.shadowRoot.querySelector('#l3');
        const l4 = this.shadowRoot.querySelector('#l4');
        const duration = 0.15;
        const scale = 1.2;
        const ease = "power3";
        const opacity = 0.6;
        const startOpacity = 1;
        let transformOrigin = "50% 50%";


        let master = gsap.timeline({
            repeat: -1,
            repeatDelay: 10,
            delay: 10,
        });


        const repeatTimeline = gsap.timeline({repeat: 5});



        //repeatTimeline.set([l2, l1, l3, l4], {opacity: startOpacity, scale: 1, repeat: 10});
        repeatTimeline.fromTo(l1, {scale: 1, transformOrigin, ease, opacity}, {
            scale,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l2, {scale: 1, transformOrigin, ease, opacity: startOpacity}, {
            scale,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l3, {scale, transformOrigin, ease, opacity: startOpacity}, {
            scale: 1.0,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l4, {scale, transformOrigin, ease, opacity: startOpacity}, {
            scale: 1.0,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l3, {scale, transformOrigin, ease, opacity: startOpacity}, {
            scale: 1.0,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l2, {scale, transformOrigin, ease, opacity: startOpacity}, {
            scale: 1.0,
            transformOrigin,
            ease,
            opacity,
            duration
        });
        repeatTimeline.fromTo(l1, {scale, transformOrigin, ease, opacity: startOpacity}, {
            scale: 1.0,
            transformOrigin,
            ease,
            opacity,
            duration
        });

        master.add(repeatTimeline);


        // Simple code, but not quite as nice
        // let master = gsap.timeline({
        //     repeat: -1,
        //     yoyo: true,
        //     repeatDelay: 10,
        // });
        // //let tl2 = gsap.timeline();
        //
        // master.from('.line', {
        //     repeat: 10,
        //     scale: 1.1,
        //     duration: 0.2,
        //     transformOrigin: '50% 50%',
        //     ease: 'back.inOut',
        //     stagger: 0.09,
        //     opacity: 0.5,
        //     yoyo: true,
        // });


    }
}