let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw..play again";
    msg.style.backgroundColor="black";
}

const generateCompChoice=()=>{
    const obj1=['Rock','Paper','Scissor'];
    const value=Math.floor(Math.random()*3);
   return obj1[value];

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You won.");
        msg.innerText="You won.";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lost..:(");
        msg.innerText="You lost.";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //generate computer choice
    const compChoice=generateCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
       drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='Rock'){
            userWin=compChoice==="Paper"? false : true;
        }
        else if(userChoice==='Paper'){
            userWin=compChoice==="Scissor"? false : true;
        }
        else {
            userWin=compChoice==="Rock"? false : true;
        }
         showWinner(userWin);  
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});