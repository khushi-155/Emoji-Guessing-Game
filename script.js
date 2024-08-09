const emojis = [
    {description:"heart eyes",emoji:'😍'},
    {description:"thumbs up",emoji:'👍'},
    {description:"party popper",emoji:'🎉'},
     {description:"crying faces",emoji:'😢'},
     {description:"clap",emoji:'👏'},
];
const descriptions = document.querySelector("#description");
const result = document.querySelector("#result");
const score  = document.querySelector("#score");
const inputvalue = document.querySelector("#inputtype");
const timer = document.querySelector("#timer");

let index = 0;
let scores = 0;
let seconds = 30;

function emojisQuestions(){
    if(index<emojis.length){
    descriptions.textContent = emojis[index].emoji;
    }
}

function checkGuess(){
    const value1  =  inputvalue.value.trim();

    if(value1 === emojis[index].description){
       scores++;
       result.textContent = "Correct!";
    }
    else{
        result.textContent = "Wrong!";
    }
    score.textContent = `Score: ${scores}`;
    inputvalue.value = "";
    inputvalue.focus();
    nextEmoji();
};

function nextEmoji(){
    index++;

    if(index === emojis.length){
        index =  0;
        score.textContent = 'Score: 0';
        result.textContent = "";
    }
    changeResult();
    emojisQuestions();
   
};
inputvalue.addEventListener('keydown',(event)=>{
   if(event.key==='Enter'){
     checkGuess();
   }
});
document.addEventListener('DOMContentLoaded',()=>{
    emojisQuestions();
    startTimer();

});
function startTimer(){
let timerID = setInterval(()=>{
    timer.textContent = `Time: ${seconds}s`;
    seconds--;
    if(seconds<0){
        endGame(timerID);
    }
},1000);
}
function endGame(timerID){
    clearInterval(timerID);
    inputvalue.disabled = true;
    timer.textContent = "End Game!!";
}

function changeResult(){
    setTimeout(()=>{
    result.textContent = "";
    },1000);
}