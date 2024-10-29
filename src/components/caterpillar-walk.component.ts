import {gsap} from "gsap";


const template = document.createElement('template');
template.innerHTML = `
<div id="container" style="min-width: 100vw">
<div id="caterpillar"  style="position: absolute; right: 10px;">
   <!-- Caterpillar SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 0 200 250">
        <!-- Caterpillar's Body -->
        <ellipse class="body" cx="50" cy="100" rx="20" ry="25" fill="#76c442"/>
        <ellipse class="body" cx="80" cy="100" rx="20" ry="25" fill="#699a3b"/>
        <ellipse class="body" cx="110" cy="100" rx="20" ry="25" fill="#76c442"/>
        <ellipse class="body" cx="140" cy="100" rx="20" ry="25" fill="#699a3b"/>
        <ellipse class="body" cx="170" cy="100" rx="20" ry="25" fill="#76c442"/>
        
        <!-- Group for the head, eyes, and antennae -->
        <g class="head-group">
            <!-- Caterpillar's Head -->
            <ellipse class="head" cx="30" cy="100" rx="23" ry="25" fill="#ff3d00"/>
  
            <!-- Eyes -->
            <ellipse class="eye" cx="20" cy="90" rx="6" ry="7" fill="#dce30b"/>
            <ellipse class="eye" cx="40" cy="90" rx="6" ry="7" fill="#dce30b"/>
  
            <!-- Pupils -->
            <circle class="pupil" cx="20" cy="90" r="2" fill="#000000"/>
            <circle class="pupil" cx="40" cy="90" r="2" fill="#000000"/>
            
            <!-- Antennae -->
            <line class="antenna" x1="10" y1="80" x2="0" y2="60" stroke="#6b3b00" stroke-width="3"/>
            <line class="antenna" x1="50" y1="80" x2="60" y2="60" stroke="#6b3b00" stroke-width="3"/>
            
            <!-- Smile -->
            <path d="M20,105 Q30,115 40,105" stroke="#000" stroke-width="2" fill="none"/>
        </g>
    </svg>
</div>
</div>`;


export class CaterpillarWalkComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const segments = this.shadowRoot.querySelectorAll(".body");
        const headGroup = this.shadowRoot.querySelector(".head-group");
        const caterpillar = this.shadowRoot.querySelector("#caterpillar");
        const eyes = this.shadowRoot.querySelectorAll(".eye");
        const pupils = this.shadowRoot.querySelectorAll(".pupil");


        const tl = gsap.timeline({paused: true});
        const ease = "power1.inOut";

        // Makes the eyes blink
        const blink = gsap.timeline({repeat: -1, repeatDelay:5});
        blink.from([...eyes, ...pupils], {
            scaleY: 0,
            duration: 0.1,
            yoyo: true,
            ease: "power1.inOut"
        })


        const duration = 0.2;
        const bodyTimeline = gsap.timeline({repeat: -1, repeatDelay: 1.2, yoyo: true});

        const head = gsap.timeline().to(headGroup, {
            x: "+=10",
            duration,
            ease,
            scaleX: 0.96,
            rotate: -5
        })


        const firstSegment = gsap.timeline().to(segments[0], {
            x: "+=15",
            duration,
            ease,
            rotate: -10
        })
        const secondSegment = gsap.timeline().to(segments[1], {
            x: "+=10",
            y: "-=15",
            duration,
            scaleX: 0.9,
            ease,
            onStart: () => {
                gsap.timeline().to(caterpillar, {
                    duration: 2.2,
                    ease: "expo.in",
                    yoyo: false,
                    x: "-=15",
                });
            }
        })
        const thirdSegment = gsap.timeline().to(segments[2], {
            x: "+=5",
            y: "-=30",
            scaleX: 0.9,
            duration,
            ease,

        })
        const fourthSegment = gsap.timeline().to(segments[3], {
            x: "-=5",
            y: "-=15",
            duration,
            scaleX: 0.9,
            ease
        })
        const fifthSegment = gsap.timeline().to(segments[4], {
            x: "-=20",
            scaleX: 1.1,
            duration,
            ease,
            rotate: 5
        })
        bodyTimeline.add(head)
        bodyTimeline.add(firstSegment, "-=0.1")
        bodyTimeline.add(secondSegment, "-=0.1")
        bodyTimeline.add(thirdSegment, "-=0.1")
        bodyTimeline.add(fourthSegment, "-=0.1")
        bodyTimeline.add(fifthSegment, "-=0.1")

        tl.add(bodyTimeline)
        tl.add(blink, 0)
        tl.play()

    }
}

