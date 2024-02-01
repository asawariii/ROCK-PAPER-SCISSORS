const outputWindow=document.querySelector(".output-screen");
const mainContainer=document.querySelector(".container");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const UserPickImg=document.querySelector("#userChoise");
const PCpickImg=document.querySelector("#pcChoise");
const replay=document.querySelector(".replay");
const playAgain=document.querySelector(".play-again");
const result=document.querySelector(".result");
const nextBtn= document.querySelector("#next");
const pScore1=document.querySelector("#pScore");
const cScore1=document.querySelector("#cScore");
const ruleBox=document.querySelector(".ruleBox");
const closeBtn=document.querySelector(".closeModel");
const rules=document.querySelector(".rules");
const animation=document.querySelector("#animation");

let pScore=localStorage.getItem("pScore") ;
let cScore=localStorage.getItem("cScore") ;

rules.addEventListener("click",()=>{
    ruleBox.style.display="flex";
})

closeBtn.addEventListener("click",()=>{
    ruleBox.style.display="none";
})

replay.addEventListener("click",()=>{
    mainContainer.style.display="flex";
    outputWindow.style.display="none";
})

playAgain.addEventListener("click",()=>{
    mainContainer.style.display="flex";
    outputWindow.style.display="none";
})

const userWin=()=>{
    pScore++;
    localStorage.setItem("pScore", `${pScore}`);
    pScore1.textContent=pScore;
    outputWindow.style.display="flex";
    mainContainer.style.display="none";
    playAgain.style.display="block";
    replay.style.display="none";
    result.textContent="YOU WIN ";
    nextBtn.style.display="flex";
    animation.style.display="block";
}

const computerWin=()=>{
    cScore++;
    localStorage.setItem("cScore", `${cScore}`);
    cScore1.textContent=cScore;
    outputWindow.style.display="flex";
    mainContainer.style.display="none";
    playAgain.style.display="block";
    replay.style.display="none";
    result.textContent="YOU LOSS ";
    nextBtn.style.display="none";
    animation.style.display="none";
}

const tie=()=>{
    outputWindow.style.display="flex";
    mainContainer.style.display="none";
    playAgain.style.display="none";
    replay.style.display="block";
    result.textContent="TIE UP";
    nextBtn.style.display="none";
    animation.style.display="none";
}

document.addEventListener("DOMContentLoaded",()=>{
    const choices = ["Rock", "Paper", "scissors"];
    const option = document.querySelectorAll("img");
    option.forEach((img)=>{  
        img.addEventListener("click",(e)=>{
            const userChoice = e.target.id;
            const computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();

            if(userChoice==="rock" ){
                UserPickImg.src=`${userChoice}.png`;
                UserPickImg.style.borderColor="#0074b6";
            }
            else if(userChoice==="paper"){
                UserPickImg.src=`${userChoice}.png`;
                UserPickImg.style.borderColor="#ffa943";
            }
            else if(userChoice==="scissors"){
                UserPickImg.src=`${userChoice}.png`;
                UserPickImg.style.borderColor="#bd00ff";
            }

            if(computerChoice==="rock"){
                PCpickImg.src=`${computerChoice}.png`;
                PCpickImg.style.borderColor="#0074b6";
            }
            else if(computerChoice==="paper"){
                PCpickImg.src=`${computerChoice}.png`;
                PCpickImg.style.borderColor="#ffa943";
            }
            else if(computerChoice==="scissors"){
                PCpickImg.src=`${computerChoice}.png`;
                PCpickImg.style.borderColor="#bd00ff";
            }

            if(userChoice===computerChoice){
                tie();
            }
            else if((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")){
                userWin();
            }
            else{
                computerWin();
            }
        })
    })
})