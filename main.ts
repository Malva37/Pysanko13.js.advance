let add = document.querySelector('.addButton') as HTMLButtonElement;
let cenzor = document.querySelector('.cenzor') as HTMLButtonElement;
let reset = document.querySelector('.resetButton') as HTMLButtonElement;
let bad = document.querySelector('.badWords') as HTMLElement;
let inputField = document.querySelector('.inputField') as HTMLInputElement;
let cenzorInput = document.querySelector('.cenzorInput') as HTMLInputElement;
let badWordsArray: Array<string>;
let cenzorArray: Array<string>;

add.onclick = function () {
    if (inputField.value) {
        bad.innerHTML = bad.innerHTML.concat(' ', inputField.value);
        inputField.value = '';
        badWordsArray = bad.innerHTML.split(' ');
    } else {
        inputField.placeholder = 'Please write a word!';
        inputField.style.borderColor = 'red';
    }
}
reset.onclick = function () {
    bad.innerHTML = '';
    cenzorInput.value = '';
    cenzorInput.placeholder = 'text here...';
    inputField.placeholder = 'word here...';
    inputField.style.borderColor = 'white';

}
cenzor.onclick = function () {
    if (cenzorInput.value) {
        cenzorArray = cenzorInput.value.split(' ');
        badWordsArray = bad.innerHTML.split(' ');
        for (let i = 0; i < cenzorArray.length; i++) {
            let check: boolean = badWordsArray.some(value => value == cenzorArray[i]);
            if (check) {
                cenzorArray[i] = '*'.repeat(cenzorArray[i].length);
            }
        }
        cenzorInput.value = cenzorArray.join(' ');
    }
    if (!cenzorInput.value) {
        cenzorInput.placeholder = 'Please write a text!';
        cenzorInput.style.borderColor = 'red';
        return;
    }

}