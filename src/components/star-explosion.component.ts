import {gsap} from "gsap";


const template = document.createElement('template');
template.innerHTML = `
<section>
<div class="star"></div>
</section>
<style>

section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


/* HTML: <div class="star"></div> */
.star { 
  aspect-ratio: 1;
  background: #F8CA00;
  clip-path: polygon(50% 0,
    calc(50%*(1 + sin(.4turn))) calc(50%*(1 - cos(.4turn))),
    calc(50%*(1 - sin(.2turn))) calc(50%*(1 - cos(.2turn))),
    calc(50%*(1 + sin(.2turn))) calc(50%*(1 - cos(.2turn))),
    calc(50%*(1 - sin(.4turn))) calc(50%*(1 - cos(.4turn))) 
   ); 
   visibility: hidden;
   position: absolute;
  
   </style>
   
  
}



<style>



</style>`;


const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#F5FF33", "#FF8C33", "#8C33FF", "#33FF8C"
];

const starDistance = 200;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export class StarExplosionComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        const noOfStars = 13;
        const increment = Math.PI * 2 / noOfStars;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const section = this.shadowRoot.querySelector('section');
        for (let i = 0; i < noOfStars; i++) {
            let star = document.createElement('div');
            star.classList.add('star');
            section.appendChild(star);
        }

        const timeline = gsap.timeline({paused: true});

        const stars = this.shadowRoot.querySelectorAll('.star');

        timeline.to(stars, {
            duration: 2.5,
            width: "random(50, 130, 5)",
            background: () => colors[getRandomInt(10)],
            rotate: 260,
            visibility: 'visible',
            opacity: 0,
            ease: "power1.out",
            delay: 0.5,
            stagger: {
                each: 0.05,
                from: "random",
            },
            x: i => starDistance * Math.cos(i * increment),
            y: i => starDistance * Math.sin(i * increment),
            z: 10,
            force3D: true,
        });

        timeline.play();

    }
}

