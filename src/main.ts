import './style.css'
//import 'animate.css'
import {gsap} from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {HelloWorld} from "./components/hello-world.component.ts";
import {AnimatedNumberComponent} from "./components/animated-number.component.ts";
import {AnimatedChevronsComponent} from "./components/chevron.component.ts";
import {TickComponent} from "./components/tick.component.ts";
import {CrossComponent} from "./components/cross.component.ts";


gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MotionPathPlugin);

window.customElements.define('hello-world', HelloWorld);
window.customElements.define('animated-number', AnimatedNumberComponent);
window.customElements.define('animated-chevrons', AnimatedChevronsComponent);
window.customElements.define('animated-tick', TickComponent);
window.customElements.define('animated-cross', CrossComponent);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="app">
<hello-world></hello-world>
<animated-number></animated-number>
<animated-chevrons></animated-chevrons>
<animated-tick></animated-tick>
<animated-cross></animated-cross>

`





