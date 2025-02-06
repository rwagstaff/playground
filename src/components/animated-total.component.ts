import {gsap} from "gsap";


const template = document.createElement('template');
template.innerHTML = `
<style>

.number-display {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem;
}

</style>
<div class="number-display" id="number-display">0</div>
    <input type="number" id="number-input" placeholder="Enter a number">
<button id="random">Random</button>

    </div>`;

export class AnimatedNumberComponent extends HTMLElement {


    connectedCallback() {
        this.attachShadow({mode: 'open'});
        const sr = this.shadowRoot;
        sr.appendChild(template.content.cloneNode(true));
        const numberDisplay = sr.getElementById('number-display');
        const numberInput = sr.getElementById('number-input') as HTMLInputElement;
        const randomButton = sr.getElementById('random');
        let currentNumber = '0';

        randomButton.addEventListener('click', () => {
            const random = Math.floor(Math.random() * 1000);
            animateDigits(random);
        });

        function animateDigits(newNumber) {
            let start = 0;

            numberDisplay.innerHTML = start.toString();
            const id = setInterval(() => {
                start++;
                numberDisplay.innerHTML = start.toString();
                if (start === newNumber) {
                    clearInterval(id);
                }
            }, 100);
            start++;
        }


        function gsapAnimate(newDigit, oldDigit, digitSpan, i) {
            // Use GSAP to animate the digits
            if (newDigit !== oldDigit) {
                if (newDigit > oldDigit) {
                    gsap.fromTo(digitSpan, {opacity: 0, y: 50}, {opacity: 1, y: 0, delay: i * 0.1, duration: 0.5});
                } else {
                    gsap.fromTo(digitSpan, {opacity: 0, y: -50}, {opacity: 1, y: 0, delay: i * 0.1, duration: 0.5});
                }
            } else {
                gsap.to(digitSpan, {opacity: 1, y: 0, delay: i * 0.1, duration: 0.5});
            }
        }

        numberInput.addEventListener('input', () => {
            const newNumber = numberInput.value as any;
            if (!isNaN(newNumber) && newNumber !== '') {
                animateDigits(newNumber);
            }
        });

    }

}