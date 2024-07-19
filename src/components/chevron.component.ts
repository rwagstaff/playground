import {gsap} from 'gsap';

const template = document.createElement('template');
template.innerHTML = `
  <svg width="100" height="100" viewBox="0 0 180 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Component 8">
      <path
        id="Vector"
        d="M3.0704 88.9337C-1.02396 92.8964 -1.04329 99.3311 3.1315 103.366L1.86067 102.134C5.97436 106.127 12.6503 106.158 16.7453 102.174L60.513 59.7799C64.6061 55.8059 64.6266 49.3613 60.513 45.3774L16.7453 2.98215C12.6503 -0.990614 6.01551 -1.01119 1.86067 3.0233L3.1315 1.79175C-1.00338 5.78634 -0.963471 12.3001 3.0704 16.2236L33.1632 45.388C37.2576 49.3613 37.2164 55.8465 33.1632 59.7693L3.0704 88.9337Z"
        fill="#FAF9F6"
      ></path>
      <path
        id="Vector_2"
        d="M51.0719 88.9337C46.9775 92.8964 46.9582 99.331 51.133 103.366L49.8621 102.134C53.9758 106.127 60.6518 106.158 64.7467 102.174L108.514 59.7799C112.608 55.8059 112.628 49.3613 108.514 45.3774L64.7467 2.98215C60.6518 -0.990613 54.017 -1.01119 49.8621 3.0233L51.133 1.79175C46.9981 5.78634 47.038 12.3001 51.0719 16.2236L81.1647 45.388C85.259 49.3613 85.2179 55.8465 81.1647 59.7693L51.0719 88.9337Z"
        fill="#FAF9F6"
      ></path>
      <path
        id="Vector_3"
        d="M99.0728 88.9337C94.9785 92.8964 94.9592 99.3311 99.1339 103.366L97.8631 102.134C101.977 106.127 108.653 106.158 112.748 102.174L156.515 59.7799C160.609 55.8059 160.629 49.3613 156.515 45.3774L112.748 2.98215C108.653 -0.990614 102.018 -1.01119 97.8631 3.0233L99.1339 1.79175C94.9991 5.78634 95.039 12.3001 99.0728 16.2236L129.166 45.388C133.26 49.3613 133.219 55.8465 129.166 59.7693L99.0728 88.9337Z"
        fill="#FAF9F6"
      ></path>
    </g>
  </svg>
    `;

export class AnimatedChevronsComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // // GSAP Animation for gradient stops
        const vector = this.shadowRoot.getElementById('Vector');
        const vector2 = this.shadowRoot.getElementById('Vector_2');
        const vector3 = this.shadowRoot.getElementById('Vector_3');

        gsap
            .timeline({repeat: -1, yoyo: false})
            .to(vector, {fill: '#BFE0DC', duration: 1, opacity: 1, x: 5})
            .to(vector2, {fill: '#7FC1BA', duration: 1, opacity: 1, x: 7, delay: 0.5}, 0)
            .to(vector3, {fill: '#3E998A', duration: 1, opacity: 1, x: 10, delay: 1}, 0);
    }
}