function HiHi() {
    const text = document.querySelector('#one');
    const text1 = document.querySelector('#two');

    text.textContent = 'Hi';
    text1.textContent = 'Hi';
    
}

function DoNot()    {
    alert("Don't click me said: Why you clicked me?")
    document.querySelector('#three').style.backgroundColor = 'black';
    document.querySelector('#three').style.color = 'white';
}

function HeyDoNot()    {
    alert("Hey! don't click me said: Why you clicked me?")
    document.querySelector('#four').style.backgroundColor = 'black';
    document.querySelector('#four').style.color = 'white';
}

function DamnNot()    {
    alert("Damnnnnn, why always click me said: Why you clicked me?")
    document.querySelector('#five').style.backgroundColor = 'black';
    document.querySelector('#five').style.color = 'white';
}

function NoNo()    {
    alert("NOOOOO! don't click me said: Why you clicked me?")
    document.querySelector('#six').style.backgroundColor = 'black';
    document.querySelector('#six').style.color = 'white';
}

const HiYaaa = document.querySelector('.ChangeText');
HiYaaa.addEventListener('click', HiHi);
const Do = document.querySelector('#three');
Do.addEventListener('click', DoNot);
const Hey = document.querySelector('#four');
Hey.addEventListener('click', HeyDoNot);
const Damn = document.querySelector('#five');
Damn.addEventListener('click', DamnNot);
const No = document.querySelector('#six');
No.addEventListener('click', NoNo);