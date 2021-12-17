console.log('Blackjack Project');

/////////////////////// VARIABLES GLOBAL SCOPE  ////////////////////////////////
let deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11];

let wallet = 100
let playersHand
let dealersHand

const dealButton = document.querySelector('#start')
const hitButton = document.querySelector('#hit')
const stayButton = document.querySelector('#stay')

const dealerSide = document.querySelector('#dealer')
// dealerSide.innerText = dealersHand
const dealersValue = document.querySelector('#dealersValue')

const playerSide = document.querySelector('#player')
// playerSide.innerText = playerHand
const playersValue = document.querySelector('#playersValue')

const walletAmount = document.querySelector('#walletAmount')

const commentary = document.querySelector('#commentaryBox')
// commentary.innerText = "21! Player wins on the draw!"


/////////////////////// Draw Cards Function  ///////////////////////////////

function drawCards(deck){
  let randomCards = Math.floor(deck.length * Math.random())
  return deck[randomCards]
}
console.log(drawCards(deck));
/////////////////////// Player And Dealers Funtion //////////////////////////////
function dealHands(){
  wallet -= 5
  if (wallet === 0){
    alert('GAME OVER!')
  }
  commentary.innerText = ""
  playersHand =[drawCards(deck) , drawCards(deck)]
  dealersHand =[drawCards(deck), drawCards(deck)]
  console.log('Your cards are '+ playersHand);
  console.log(`Your hand value: ` + handValue(playersHand));
  console.log(`Dealer's cards are `+ dealersHand);
  console.log(`Dealer's hand value: ` + handValue(dealersHand));
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

function startGame(){
  dealHands()
  if (handValue(playersHand)=== 21){
      console.log('21! Player wins on the draw!');
      commentary.innerText = "21! Player wins on the draw!"
      wallet += 10
  } else if (handValue(dealersHand)===21){
    console.log('21! Dealer wins on the draw!');
    commentary.innerText = " 21! Dealer wins on the draw!"
    }
}

startGame()


dealerSide.innerText = dealersHand
playerSide.innerText = playersHand

dealersValue.innerText= handValue(dealersHand)
playersValue.innerText= handValue(playersHand)
walletAmount.innerText = wallet


/////////////////////// HIT Function/Button  ///////////////////////////////

function hit (){
  playersHand.push(drawCards(deck))
  dealerSide.innerText = dealersHand
  playerSide.innerText = playersHand

  dealersValue.innerText= handValue(dealersHand)
  playersValue.innerText= handValue(playersHand)

  walletAmount.innerText = wallet
  if (handValue(playersHand) === 21){
    console.log('21! player wins!');
    commentary.innerText = "21! player wins!"
    wallet += 10
  }else if(handValue(playersHand) > 21){
    console.log('Player BUSTS!');
    commentary.innerText = "Player Busts!"

  }
}



function dealerHit (){
  dealersHand.push(drawCards(deck))
  dealerSide.innerText = dealersHand
  playerSide.innerText = playersHand

  dealersValue.innerText= handValue(dealersHand)
  playersValue.innerText= handValue(playersHand)

  walletAmount.innerText = wallet
  console.log(`Dealer's new hand: ` + dealersHand);
  console.log(`Dealer's hand value: ` + handValue(dealersHand));
  if (handValue(dealersHand) === 21){
    console.log('21! dealer wins!');
    commentary.innerText = "21! Dealer wins!"
  }else if(handValue(dealersHand) > 21){
    console.log('DEALER BUSTS!');
    commentary.innerText = "DEALER BUSTS!"
    wallet += 10



  }
  dealerSide.innerText = dealersHand
  playerSide.innerText = playersHand

  dealersValue.innerText= handValue(dealersHand)
  playersValue.innerText= handValue(playersHand)

  walletAmount.innerText = wallet
}
hitButton.addEventListener('click', (event) => {

hit()
})

/////////////// STAND BUTTON  AND COMPARE HANDS ///////////////
function stand(){
  if (handValue(playersHand) >= 12 && handValue(playersHand) <= 18 || handValue(dealersHand) <= handValue(playersHand)){
    dealerHit()
  }
  compareHands()
}

stayButton.addEventListener('click', (event) => {
stand()
})

/////////////// Comparing Hands  ///////////////
function compareHands(){
  if (handValue(dealersHand) < handValue(playersHand)|| handValue(dealersHand) <= handValue(playersHand)){
    dealerHit()
  }else if (handValue(playersHand) <= 21 && handValue(playersHand) > handValue(dealersHand)){
    console.log('Player wins!');
    commentary.innerText = "Player Wins!"
    wallet += 10
    console.log(wallet);
  }else if (handValue(dealersHand)<= 21 && handValue(dealersHand) > handValue(playersHand)) {
    console.log('Dealer wins!');
    commentary.innerText = "Dealer Wins!"
  }
}
/////////////// Check for 21  ///////////////
function checkFor21 (){
  if (handValue(playersHand) === 21){
    console.log('player wins');
    commentary.innerText = "21! Player wins on the draw!"
    wallet += 10
  }else if (handValue(dealersHand)=== 21){
    console.log('dealer wins');
    commentary.innerText = "21! Dealer wins on the draw!"
  }
}
//////////////// ACCESSING THE DOM ////////////////

dealerSide.innerText = dealersHand
playerSide.innerText = playersHand

dealersValue.innerText= handValue(dealersHand)
playersValue.innerText= handValue(playersHand)

walletAmount.innerText = wallet


dealButton.addEventListener('click', (event) => {
dealHands()
checkFor21()
dealerSide.innerText = dealersHand
playerSide.innerText = playersHand

dealersValue.innerText= handValue(dealersHand)
playersValue.innerText= handValue(playersHand)

walletAmount.innerText = wallet


})
