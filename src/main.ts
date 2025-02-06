import './style.css'

import {gsap} from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

import {HelloWorld} from "./components/hello-world.component.ts";
import {AnimatedNumberComponent} from "./components/animated-number.component.ts";
import {AnimatedChevronsComponent} from "./components/chevron.component.ts";
import {TickComponent} from "./components/tick.component.ts";
import {CrossComponent} from "./components/cross.component.ts";
import {CircleTimerComponent} from "./components/circle-timer.component.ts";
import {ScanItemsComponent} from "./components/scan-items.component.ts";
import {ZoomingInputComponent} from "./components/zooming-input.component.ts";
import {KeyboardComponent} from "./components/keyboard.component.ts";
import {NiceInputComponent} from "./components/nice-input.component.ts";
import {StarExplosionComponent} from "./components/star-explosion.component.ts";
import {CaterpillarWalkComponent} from "./components/caterpillar-walk.component.ts";
import {MorphComponent} from "./components/morph.component.ts";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);



// Call this function before using the plugin

window.customElements.define('hello-world', HelloWorld);
window.customElements.define('animated-number', AnimatedNumberComponent);
window.customElements.define('animated-chevrons', AnimatedChevronsComponent);
window.customElements.define('animated-tick', TickComponent);
window.customElements.define('animated-cross', CrossComponent);
window.customElements.define('circle-timer', CircleTimerComponent);
window.customElements.define('scan-items', ScanItemsComponent);
window.customElements.define('input-zoom', ZoomingInputComponent);
window.customElements.define('my-keyboard', KeyboardComponent);
window.customElements.define('nice-input', NiceInputComponent);
window.customElements.define('star-explosion', StarExplosionComponent);
window.customElements.define('caterpillar-walk', CaterpillarWalkComponent);
window.customElements.define('morph-circle', MorphComponent);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!--   <hello-world></hello-world>-->
<!--   <star-explosion></star-explosion>-->
<!--   <caterpillar-walk></caterpillar-walk>-->
   <morph-circle></morph-circle>
<!--<scan-items></scan-items>-->

<!--<hello-world></hello-world>-->
<!--<animated-number></animated-number>-->
<!--<animated-chevrons></animated-chevrons>-->
<!--<animated-tick></animated-tick>-->
<!--<animated-cross></animated-cross>-->
<!--<circle-timer></circle-timer>-->
`





