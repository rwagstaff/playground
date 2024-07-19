import {gsap} from "gsap";

const template = document.createElement('template');
template.innerHTML = `
         <svg viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:anim="http://www.w3.org/2000/anim" anim="" anim:transform-origin="50% 50%" anim:duration="1" anim:ease="ease-in-out">
        <g id="Frame 26080136">
         <path id="Icon" d="M79.6157 32.0273L79.6157 81.7828C79.7804 82.6426 79.4328 83.4108 78.8657 83.9779C78.2987 84.545 77.5282 84.8867 76.6706 84.887H50.3294C48.6145 84.887 47.2256 83.4981 47.2252 81.7827C47.2247 80.0673 48.614 78.6789 50.3294 78.6785L73.5701 78.6822V32.0364C73.5701 30.3215 74.9589 28.9326 76.6743 28.9322C78.3897 28.9317 79.7712 30.3169 79.6157 32.0273V32.0273Z" fill="#FFFFFF" anim:opacity="0[0:0.8:1:ease-in-out]" anim:scale="0[0:0.7:1:ease-in-out]" anim:rotation="0[0:0.8:45:ease-in-out]"></path>
          <path id="Icon_2" d="M63.5 12.1797C35.1535 12.1797 12.1797 35.1535 12.1797 63.5C12.1797 91.8465 35.1535 114.82 63.5 114.82C91.8465 114.82 114.82 91.8465 114.82 63.5C114.82 35.1535 91.8465 12.1797 63.5 12.1797ZM63.5 109.198C40.5061 109.198 17.8022 86.4919 17.8022 63.5C17.8022 40.5081 40.5061 17.8022 63.5 17.8022C86.4939 17.8022 109.198 40.5081 109.198 63.5C109.198 86.4919 86.4939 109.198 63.5 109.198Z" fill="#FFFFFF" anim:opacity="0[0:1:1:ease-in-out]" anim:scale="0.5[0:0.6:1.2:ease-in-out][0.6:1:1:ease-in-out]"></path>
        </g>
</svg>`;

export class TickComponent extends HTMLElement {
    connectedCallback() {
        const primary = '#FFA500';
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const icon = this.shadowRoot.getElementById('Icon');
        const icon2 = this.shadowRoot.getElementById('Icon_2');


        const tl = gsap.timeline({
            defaults: {transformOrigin: '50% 50%', ease: 'easeInOut'},
        });

        // Add animations to the timeline
        tl.to(icon, {
            duration: 0.8,
            opacity: 1,
            scale: 1,
            rotation: 45,
            fill: primary,
        });

        tl.to(
            icon2,
            {
                duration: 1,
                opacity: 1,
                scale: 1.2,
                fill: primary,
            },
            0
        ); // Start at the same time as the first animation

        tl.to(
            icon2,
            {
                duration: 0.4,
                scale: 1,
            },
            1
        );
    }
}