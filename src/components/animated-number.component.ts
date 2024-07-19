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
            animateDigits(currentNumber, random);
        });

        function animateDigits(oldNumber, newNumber) {
            const oldDigits = oldNumber.toString().split('');
            const newDigits = newNumber.toString().split('');

            // Calculate the maximum length of digits to iterate
            const maxLength = Math.max(oldDigits.length, newDigits.length);

            numberDisplay.innerHTML = ''; // Clear the current display

            for (let i = 0; i < maxLength; i++) {
                const oldDigit = oldDigits[i] || '';
                const newDigit = newDigits[i] || '';

                const digitSpan = document.createElement('span');
                digitSpan.classList.add('digit');


                gsapAnimate(newDigit, oldDigit, digitSpan, i);


                // Add slight delay for each digit
                digitSpan.style.animationDelay = `${i * 0.05}s`;
                digitSpan.textContent = newDigit;
                numberDisplay.appendChild(digitSpan);
            }

            currentNumber = newNumber;
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
                animateDigits(currentNumber, newNumber);
            }
        });

    }

}