let add = document.querySelector('.addButton');
let cenzor = document.querySelector('.cenzor');
let reset = document.querySelector('.resetButton');
let bad = document.querySelector('.badWords');
let inputField = document.querySelector('.inputField');
let cenzorInput = document.querySelector('.cenzorInput');
let badWordsArray;
let cenzorArray;
add.onclick = function () {
    if (inputField.value) {
        bad.innerHTML = bad.innerHTML.concat(' ', inputField.value);
        inputField.value = '';
        badWordsArray = bad.innerHTML.split(' ');
    }
    else {
        inputField.placeholder = 'Please write a word!';
        inputField.style.borderColor = 'red';
    }
};
reset.onclick = function () {
    bad.innerHTML = '';
    cenzorInput.value = '';
    cenzorInput.placeholder = 'text here...';
    inputField.placeholder = 'word here...';
    inputField.style.borderColor = 'white';
};
cenzor.onclick = function () {
    if (cenzorInput.value) {
        cenzorArray = cenzorInput.value.split(' ');
        badWordsArray = bad.innerHTML.split(' ');
        for (let i = 0; i < cenzorArray.length; i++) {
            let check = badWordsArray.some(value => value == cenzorArray[i]);
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
};
