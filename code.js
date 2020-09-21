console.log("hello world!")
//the variable 
var userScore = 0;
var compScore = 0;


//getting the value
//chaching the dom
//mainly storing the data for further use 
const userScore_span = document.getElementById('user-score'); //html varaiable that stores dumb element
const compScore_span = document.getElementById('comp-score'); //same 
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result-message>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

//checking 
console.log(userScore_span);
console.log(userScore_span);
console.log(scoreBoard_div);
console.log(result_div);
function updateThings(messageType,whoWon)
{
    //updates the value
    result_div.innerHTML = messageType;
    if(whoWon=='user')
    {
        userScore++;
        userScore_span.innerHTML = userScore;
    }
    else if(whoWon=='comp')
    {
        compScore++;
        compScore_span.innerHTML = compScore;
    }
    else 
    {
        //do nothing
    }
}

function getComputerChoice()
{
    //compChoice array
    var compChoice = ['rock','paper','scissor'];
    var randomChoice = Math.floor((Math.random()*10))%3;
    //console.log(randomChoice);
    var compChose = compChoice[randomChoice];
    return compChose;
}


function gameFunction(userChoice)
{
    //game logic
    //if user and comp choice is same then match tied
    compChose = getComputerChoice();
    if(compChose==userChoice)
    {
        updateThings("User chose " +  userChoice + " and Comp chose " + compChose + " so match is tied!",'tied');
    }
    else 
    {
        if(userChoice=='rock' && compChose=='scissor')
        {
            updateThings("User chose rock and Comp chose scissor so user wins!",'user');
        }
        else if(userChoice=='scissor' && compChose=='rock')
        {
            updateThings("User chose scissor and Comp chose rock so comp wins!",'comp');
        }

        if(userChoice=='rock' && compChose=='paper')
        {
            updateThings("User chose rock and Comp chose paper so comp wins!",'comp');
        }
        else if(userChoice=='paper' && compChose=='rock')
        {
            updateThings("User chose paper and Comp chose rock so user wins!",'user');
        }
        
        if(userChoice=='paper' && compChose=='scissor')
        {
            updateThings("User chose paper and Comp chose scissor so comp wins!",'comp');
        }
        else if(userChoice=='scissor' && compChose=='paper')
        {
            updateThings("User chose scissor and Comp chose paper so user wins!",'user');
        }
    }

}

function main(){
    rock_div.addEventListener('click',function()
        {
            gameFunction("rock");
        }
    )

    paper_div.addEventListener('click',function()
        {
            gameFunction("paper");
        }   
    )

    scissor_div.addEventListener('click',function()
        {
            gameFunction("scissor");
        }
    )
}


main();