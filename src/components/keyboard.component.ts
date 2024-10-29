import html from './keyboard.component.html?raw';

const template = document.createElement('template');
template.innerHTML = html;


function keyboardLayouts() {
    return {
        default: ['q w e r t y u i o p', 'a s d f g h j k l', '{shift} z x c v b n m {backspace}', '123 {space} return'],
        shift: ['Q W E R T Y U I O P', 'A S D F G H J K L', 'Z X C V B N M', '{shift} {space} {backspace}'],
        email: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m', '@ {space} . {backspace}'],
        number: ['1 2 3', '4 5 6', '7 8 9', '. 0 {backspace}'],
    };
}

const darkKeys = ['{shift}', '{backspace}', '123', 'return']

export class KeyboardComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const container = this.shadowRoot.querySelector('.keyboard');

        const layouts = keyboardLayouts()['default'];


        layouts.forEach((row) => {
            const rowElement = document.createElement('div');

            document.getElementById('keyboard').addEventListener('click', (event: PointerEvent) => {

                rowElement.classList.add('keyboard__row');
                rowElement.classList.add('keyboard__row--tab');
                row.split(' ').forEach((key) => {
                    const keyElement = document.createElement('div');
                    keyElement.classList.add('keyboard__item');
                    if (darkKeys.includes(key)) {
                        keyElement.classList.add('keyboard__item--bg-secondary');
                    } else {
                        keyElement.classList.add('keyboard__item--bg-primary');
                    }

                    if (key === '{space}') {
                        keyElement.classList.add('keyboard__item--space')
                    }

                    keyElement.setAttribute('data-key-id', key);
                    keyElement.addEventListener('click', (event: PointerEvent) => {
                        let target = event.target as Element;
                        console.log(target.getAttribute('data-key-id'));
                    })

                    const letterElement = document.createElement('div');
                    letterElement.classList.add('keyboard__item-letter');

                    letterElement.textContent = key;
                    keyElement.appendChild(letterElement);
                    rowElement.appendChild(keyElement);
                });
                container.appendChild(rowElement);
            });

        });

    }
}