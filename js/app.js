console.log('Blackjack Project');
//
// /////////////////////// VARIABLES GLOBAL SCOPE  ////////////////////////////////
// let deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
//             2,3,4,5,6,7,8,9,10,10,10,10,11,
//             2,3,4,5,6,7,8,9,10,10,10,10,11,
//             2,3,4,5,6,7,8,9,10,10,10,10,11];
//
// let bank = 0
// // let randomCards = Math.floor(deck.length * Math.random())
// const startButton = document.querySelector('.start')
//
// /////////////////////// Draw Cards Function  ///////////////////////////////
//
// function drawCards(deck){
//   let randomCards = Math.floor(deck.length * Math.random())
//   return deck[randomCards]
// }
// console.log(drawCards(deck));
// /////////////////////// Player And Dealers Hands //////////////////////////////
//
// let playersHand =[drawCards(deck) , drawCards(deck)]
// let dealersHand =[drawCards(deck), drawCards(deck)]
// console.log('Your cards are '+ playersHand);
// console.log('Dealers cards are '+ dealersHand);
//
//
// /////////////////////// Start Game Button ///////////////////////////
// startGame(){
//
// }
//
// startButton.addEventListener('click', (event) => {
//   event.target.disabled = true
//   playersHand
//   dealersHand
// })


// /////////////////////// CARD CLASS  ////////////////////////////////
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

let card = new Card('Hearts', 8)
console.log(card);

/////////////////////// DECK CLASS ////////////////////////////////
class Deck {
  constructor() {
    this.deck = []
    // this.hand =
  }
  createDeck(suits, values){
    for (let suit of suits){
      for(let value of values){
        this.deck.push(new Card(suit,value))
      }
    }
    return this.deck
  }
  drawCards(){
    let counter = this.deck.length, temp, i

    while(counter){
      i = Math.floor(Math.random() * counter--)
      temp = this.deck[counter] = this.deck[i]
      this.deck[i] = temp
    }
    return this.deck
  }
  playerDeal(){

    let hand = []
    while(hand.length < 2){
      hand.push(this.deck.pop())
      console.log(hand);
    }
    return hand
    // console.log(hand);
  }
  computerDeal(){
    let hand = []
    while(hand.length < 2){
      hand.push(this.deck.pop())
      console.log(hand);
    }
    return hand

  }

  hit(){


  }
  stay(){

  }
}
let deck = new Deck

let suits = ['Hearts','Clubs','Diamonds','Spades']
let values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace']

deck.createDeck(suits,values)

console.log(deck)
console.log(deck.drawCards());


function deal(){
  deck.computerDeal()
  deck.playerDeal()
}
deal()
// console.log(deck.deal());

/////////////////////// PLAYER CLASS  ////////////////////////////////
  class PLAYERS {
    constructor() {

    }
  }

  /////////////////////// USERS OBJECT  ////////////////////////////////
  const dealer = new PLAYERS()
  const user = new PLAYERS()

console.log(dealer);
console.log(user);
/////////////////////// EVENT LISTENERS  ////////////////////////////////


// aButton.addEventListener('click', (event) => {
//
//
// })
