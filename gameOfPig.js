var currentRoundScore
var p1Score
var p2Score
var winScore = 40
var die1
var die2
var currentPlayer



function hold(){
    if(currentPlayer){
        p2Score += currentRoundScore 
        $("#p2Score").text(p2Score)
        $("#p2Current").text("0")
    }
    else{
        p1Score += currentRoundScore
        $("#p1Score").text(p1Score)
        $("#p1Current").text("0")
    }
    currentRoundScore = 0
    $("#p"+(currentPlayer+1)+"Heading").css("color", "black")
    currentPlayer = !currentPlayer
    $("#p"+(currentPlayer+1)+"Heading").css("color", "white")
    $("#info").text("Player "+(currentPlayer+1)+"'s turn!")
}

function roll(){
    die1 = Math.floor(Math.random() * 6) + 1 
    die2 = Math.floor(Math.random() * 6) + 1

    $("#info").text("Dice rolled")
    $("#dice1").attr("src","img/d"+die1+".svg");
    $("#dice2").attr("src","img/d"+die2+".svg");

    if(die1 == 1 || die2 == 1){
        $("#info").text("Roll lost! Switching turns")
        currentRoundScore = 0
        $("#p"+(currentPlayer+1)+"Heading").css("color", "black")
        currentPlayer = !currentPlayer
        $("#p"+(currentPlayer+1)+"Heading").css("color", "white")
    }
    else{
        currentRoundScore += die1 + die2
        $("#p"+(currentPlayer+1)+"Current").text(currentRoundScore)
    }
}


$(function() {
    currentRoundScore = 0
    p1Score = 0
    p2Score = 0
    currentPlayer = 0
    document.getElementById("p1Heading").style.color = "white"
    $("#info").text("Player 1's turn")

    $("#holdButton").click(hold);
    $("#rollButton").click(roll);
})