console.log('Blackjack Project');

/////////////////////// VARIABLES GLOBAL SCOPE  ////////////////////////////////
let deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11];

let bank = 500
let playersHand
let dealersHand

const startButton = document.querySelector('.start')
const hitButton = document.querySelector('#hit')
const stayButton = document.querySelector('#stay')

const dealerSide = document.querySelector('#dealer')
// dealerSide.innerText = dealersHand
const dealersValue = document.querySelector('#dealersValue')

const playerSide = document.querySelector('#player')
// playerSide.innerText = playerHand
const playersValue = document.querySelector('#playersValue')



/////////////////////// Draw Cards Function  ///////////////////////////////

function drawCards(deck){
  let randomCards = Math.floor(deck.length * Math.random())
  return deck[randomCards]
}
console.log(drawCards(deck));
/////////////////////// Player And Dealers Funtion //////////////////////////////
function dealHands(){
playersHand =[drawCards(deck) , drawCards(deck)]
dealersHand =[drawCards(deck), drawCards(deck)]
console.log('Your cards are '+ playersHand);
console.log(`Your hand value: ` + handValue(playersHand));
console.log(`Dealer's cards are `+ dealersHand);
console.log(`Dealer's hand value: ` + handValue(dealersHand));
// compareHands()
}
// start()
/////////////////////// Hand value Function  ///////////////////////////////
function handValue(hand){
  let sum = 0
  for (let i = 0; i < hand.length; i++){
    sum += hand[i]
  }
  return sum
}
// console.log();

/////////////////////// Start game function  ///////////////////////////////
startButton.addEventListener('click', (event) => {
console.log('click');
 // startGame()

})
function startGame(){
  dealHands()
  if (handValue(playersHand)=== 21){
      alert('21! Player wins on the draw!');
  } else if (handValue(dealersHand)===21){
    alert(' 21!Dealer wins on the draw!');
  }

  // if(handValue(playersHand) >= 17 || handValue(playersHand) <= 20){
  //   dealerHit()
  // }
}

startGame()
// console.log('Your cards are '+ playersHand);
// console.log(`Your hand value: ` + handValue(playersHand));
// console.log(`Dealer's cards are `+ dealersHand);
// console.log(`Dealer's hand value: ` + handValue(dealersHand));

dealerSide.innerText = dealersHand
playerSide.innerText = playersHand

dealersValue.innerText= handValue(dealersHand)
playersValue.innerText= handValue(playersHand)

/////////////////////// HIT Function/Button  ///////////////////////////////

function hit (){
  playersHand.push(drawCards(deck))
  console.log(`Your new hand: ` + playersHand);
  console.log(`Your hand value: ` + handValue(playersHand));
  if (handValue(playersHand) === 21){
    console.log('21! player wins!');
  }else if(handValue(playersHand) > 21){
    console.log('BUST!');

    dealerSide.innerText = dealersHand
    playerSide.innerText = playersHand

    dealersValue.innerText= handValue(dealersHand)
    playersValue.innerText= handValue(playersHand)
    // let endGame = alert('YOU BUSTED!')
  }
}
function dealerHit (){
  dealersHand.push(drawCards(deck))
  console.log(`Dealer's new hand: ` + dealersHand);
  console.log(`Dealer's hand value: ` + handValue(dealersHand));
  if (handValue(dealersHand) === 21){
    console.log('21! dealer wins!');
  }else if(handValue(dealersHand) > 21){
    console.log('DEALER BUSTS!');

    dealerSide.innerText = dealersHand
    playerSide.innerText = playersHand

    dealersValue.innerText= handValue(dealersHand)
    playersValue.innerText= handValue(playersHand)
    // let endGame = alert('YOU BUSTED!')
  }
}
hitButton.addEventListener('click', (event) => {
hit()
})

/////////////// STAND BUTTON  AND COMPARE HANDS ///////////////
function stand(){
  if(handValue(playersHand) <= 17 || handValue(playersHand) <= 20 || handValue(dealersHand)=== handValue(playersHand)){
    dealerHit()
  }
    compareHands()
}

stayButton.addEventListener('click', (event) => {
// console.log('click');
stand()
})

/////////////// Comparing Hands  ///////////////
function compareHands(){
  if (handValue(playersHand) <= 21 && handValue(playersHand) < handValue(dealersHand)){
    console.log('Player wins!');
  }else if (handValue(dealersHand)<= 21 && handValue(dealersHand) < handValue(playersHand)) {
 console.log('Dealer wins!');
}
}
/////////////// Check for 21  ///////////////
function checkFor21 (){
  if (handValue(playersHand) === 21){
    console.log('player wins');
  }else if (handValue(dealersHand)=== 21){
    console.log('dealer wins');
  }
}
//////////////// ACCESSING THE DOM ////////////////

dealerSide.innerText = dealersHand
playerSide.innerText = playersHand

dealersValue.innerText= handValue(dealersHand)
playersValue.innerText= handValue(playersHand)
