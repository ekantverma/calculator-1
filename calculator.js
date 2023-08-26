let currentInput = document.querySelector(".currentInput");
let answerscreen = document.querySelector(".answerscreen");
let buttons = document.querySelectorAll("button");
let erasebtn = document.querySelector("#erase");
let clearbtn = document.querySelector("#clear");
let evaluate = document.querySelector("#evaluate");
let realTimeScreenValue = [];

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerscreen.innerHTML = 0;
    currentInput.className = "currentInput";
    answerscreen.className = "answerscreen";
    answerscreen.style.color = "rgba (150, 150, 150, 0.87)"
})

buttons.forEach((btn) => {
    btn.addEventListener ("click", () => {
        if (!btn.id.match("erase")) {
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join(' ');

            if (btn.classList.contains('num_btn')) {
                answerscreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerscreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerscreen';
            answerscreen.className = 'currentInput';
            answerscreen.style.color = "white";
        }
        
        if (typeof eval (realTimeScreenValue.join('')) == 'undefined') {
            answerscreen.innerHTML = 0;
        }

    })
})

