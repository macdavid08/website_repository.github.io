const text = document.querySelector(".profile")
const newText = text.textContent
const splitText = newText.split("")
text.textContent = ""
for (let i = 0; i < splitText.length; i++){
    text.innerHTML +="<span>" + splitText[i] + "</span>"
}

let nam = 0;
let timer = setInterval(onTick, 50)

function onTick(){
    let span = text.querySelectorAll('span')[nam];
    span.classList.add('fade')
    nam++
    if(nam === splitText.length) {
        complete();
        return 
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


