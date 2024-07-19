import {gsap} from "gsap";

const primary = '#FFA500';

const template = document.createElement('template');
template.innerHTML = `
        <svg viewBox="0 0 124 153" fill="none" width="300" xmlns="http://www.w3.org/2000/svg" id="hbCross">
    <g id="Group 6" transform="translate(10, 10)">
      <path
        id="Union"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.3508 68.0872C30.1793 69.2588 30.1793 71.1583 31.3509 72.3299C32.5225 73.5014 34.422 73.5014 35.5935 72.3298L52.1788 55.7439L68.7654 72.3299C69.937 73.5014 71.8365 73.5014 73.0081 72.3298C74.1796 71.1582 74.1796 69.2587 73.008 68.0871L56.4214 51.5011L73.0037 34.9182C74.1752 33.7466 74.1752 31.8471 73.0036 30.6755C71.832 29.504 69.9325 29.504 68.761 30.6756L52.1786 47.2586L35.5964 30.677C34.4248 29.5054 32.5253 29.5055 31.3537 30.6771C30.1822 31.8487 30.1822 33.7482 31.3538 34.9197L47.9361 51.5013L31.3508 68.0872Z"
        fill="${primary}"
      ></path>
      <g id="Group 4">
        <path
          id="Icon0"
          d="M52.1797 0.179688C23.8332 0.179688 0.859375 23.1535 0.859375 51.5C0.859375 79.8465 23.8332 102.82 52.1797 102.82C80.5261 102.82 103.5 79.8465 103.5 51.5C103.5 23.1535 80.5261 0.179688 52.1797 0.179688ZM52.1797 97.1978C29.1858 97.1978 6.48193 74.4919 6.48193 51.5C6.48193 28.5081 29.1858 5.80225 52.1797 5.80225C75.1736 5.80225 97.8774 28.5081 97.8774 51.5C97.8774 74.4919 75.1736 97.1978 52.1797 97.1978Z"
          fill="${primary}"
        ></path>
      </g>
    </g>
  </svg>`;

export class CrossComponent extends HTMLElement {
    connectedCallback() {
        const primary = '#FFA500';
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const icon = this.shadowRoot.getElementById('Icon0');
        const union = this.shadowRoot.getElementById('Union');


        gsap.set(union, {transformOrigin: '50% 50%', scale: 0.25, opacity: 0});
        gsap.set(icon, {transformOrigin: '50% 50%', scale: 0.5, opacity: 0});

        gsap.to(union, {
            duration: 0.8,
            scale: 1.2,
            ease: 'ease-in-out',
            opacity: 1,
            delay: 0,
        });

        gsap.to(union, {
            duration: 0.2,
            scale: 1,
            ease: 'ease-in-out',
            delay: 0.8,
        });

        gsap.to(icon, {
            duration: 0.6,
            scale: 1.2,
            ease: 'ease-in-out',
            opacity: 1,
            delay: 0,
        });

        gsap.to(icon, {
            duration: 0.4,
            scale: 1,
            ease: 'ease-in-out',
            delay: 0.6,
        });


    }
}