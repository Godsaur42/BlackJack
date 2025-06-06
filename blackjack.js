var cards={
    "ah":[11,1],
    "2h":2,
    "3h":3,
    "4h":4,
    "5h":5,
    "6h":6,
    "7h":7,
    "8h":8,
    "9h":9,
    "10h":10,
    "jh":10,
    "qh":10,
    "kh":10,
    "ad":[11,1],
    "2d":2,
    "3d":3,
    "4d":4,
    "5d":5,
    "6d":6,
    "7d":7,
    "8d":8,
    "9d":9,
    "1dh":10,
    "jd":10,
    "qd":10,
    "kd":10,
    "as":[11,1],
    "2s":2,
    "3s":3,
    "4s":4,
    "5s":5,
    "6s":6,
    "7s":7,
    "8s":8,
    "9s":9,
    "10s":10,
    "js":10,
    "qs":10,
    "ks":10,
    "ac":11,
    "2c":2,
    "3c":3,
    "4c":4,
    "5c":5,
    "6c":6,
    "7c":7,
    "8c":8,
    "9c":9,
    "10c":10,
    "jc":10,
    "qc":10,
    "kc":10
}
var deck_count=8;
var keys=Object.keys(cards);


function get_rnd_int(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function make_deck(){
    let deck=[];
    for (let i=0; i<deck_count; i++){
        for (let j=0; j<keys.length;j++){
            deck.push(keys[j])
        }
    }
    return deck;
}

var main_deck=make_deck();
var players_hand=[[]];
var dealers_hand=[];
var bet=0
var money=5000
function draw_card(hand){
    card=get_rnd_int(0,main_deck.length);
    hand.push(main_deck[card]);
    main_deck.splice(card,1);
}
function start_game(amount){
    draw_card(dealers_hand)
    draw_card(players_hand[0])
    draw_card(dealers_hand)
    draw_card(players_hand[0])
    bet=amount
}
function check_deck(){
    console.log(deck.length)
    return deck.length
}
function check_value(hand){
    value=0
    soft=false
    for(let i=0; i<hand.length; i++){
        card=hand[i]
        value+=cards[card];
        if (value>21 && (hand.contains("ah")||hand.contains("ad")||hand.contains("as")||hand.contains("ac"))){
            value-=10;
        } 
        if (hand.contains("ah")||hand.contains("ad")||hand.contains("as")||hand.contains("ac")){
            soft=true
        }
    }
    console.log(value)
    return value,soft
}
function check_hand(hand){
    console.log(hand)
    return hand
}
function double(hand){
    bet*=2
    draw_card(hand)
}
function split(hand){
    new_hand=hand[1]
    hand.splice[1,1]
    players_hand.push(new_hand)
}

function dealer_move(){
    v,s=check_value(dealers_hand)
    if  (v<17||(v==17 && s)){
        draw_card(dealers_hand)
        return(true)
    }
    return(false)
}

//call initalize game function ie. starting cards