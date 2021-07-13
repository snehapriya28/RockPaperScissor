
function youChoose(numb){
    document.getElementById('leftHandImg').setAttribute('src', 'images/leftHand/img1.png');
    document.getElementById('rightHandImg').setAttribute('src', 'images/rightHand/img1.png');
    var animationLeft = document.getElementById('leftHandImg');
    animationLeft.classList.add("leftHandImgAnimation");

    var animationRight = document.getElementById('rightHandImg');
    animationRight.classList.add("rightHandImgAnimation");

    setTimeout(function(){
        animationLeft.classList.remove('leftHandImgAnimation');
        animationRight.classList.remove("rightHandImgAnimation");
        newImage(numb);
    },1500);

}

function newImage(numb){
    var randNum = Math.floor((Math.random() * 3) + 1);

    document.getElementById('leftHandImg').setAttribute('src', 'images/leftHand/img'+ numb +'.png');
    document.getElementById('rightHandImg').setAttribute('src', 'images/rightHand/img' + randNum + '.png');

    roundResult(numb, randNum);
}
var roundCount = 0;
var roundWin = 0;
var roundLose = 0;
var roundTies = 0;
function roundResult(numb, randNum){
    roundCount++;
    document.getElementById('roundCount').innerText = roundCount;


    // You win
    if (numb == 1 && randNum == 3){
        roundWin++;
        document.getElementById('yourWinCount').innerText = roundWin;
        document.getElementById('whoIsWinner').innerText = 'You Won';
    }
    if (numb == 2 && randNum == 1) {
        roundWin++;
        document.getElementById('yourWinCount').innerText = roundWin;
        document.getElementById('whoIsWinner').innerText = 'You Won';
    }
    if (numb == 3 && randNum == 2) {
        roundWin++;
        document.getElementById('yourWinCount').innerText = roundWin;
        document.getElementById('whoIsWinner').innerText = 'You Won';
    }
    // You lose
    if (numb == 1 && randNum == 2) {
        roundLose++;
        document.getElementById('compWinCount').innerText = roundLose;
        document.getElementById('whoIsWinner').innerText = 'You Lose';
    }
    if (numb == 2 && randNum == 3) {
        roundLose++;
        document.getElementById('compWinCount').innerText = roundLose;
        document.getElementById('whoIsWinner').innerText = 'You Lose';
    }
    if (numb == 3 && randNum == 1) {
        roundLose++;
        document.getElementById('compWinCount').innerText = roundLose;
        document.getElementById('whoIsWinner').innerText = 'You Lose';
    }
    // Match tie
    if (numb == 1 && randNum == 1) {
        roundTies++;
        document.getElementById('tieCount').innerText = roundTies;
        document.getElementById('whoIsWinner').innerText = 'Match Tie';
    }
    if (numb == 2 && randNum == 2) {
        roundTies++;
        document.getElementById('tieCount').innerText = roundTies;
        document.getElementById('whoIsWinner').innerText = 'Match Tie';
    }
    if (numb == 3 && randNum == 3) {
        roundTies++;
        document.getElementById('tieCount').innerText = roundTies;
        document.getElementById('whoIsWinner').innerText = 'Match Tie';
    }
}

function reloadThePage(){
    location.reload();
}
