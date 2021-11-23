// "use strict";

// TODO - write your code here.

const randomDamage = () => {
    let damage = Math.floor(Math.random() * 10);
    return damage;
}

const chooseOption = (opt1 , opt2) =>{
    let randNum = Math.floor(Math.random()+.5)
        randNum = (randNum===0) ? opt1: opt2;
        return randNum;
}

// let tomato = chooseOption(`opt1`, `opt2`);
// console.log(tomato)

const attackPlayer = (health) => {
    health = health - randomDamage();
    return health;
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser} !`)
}

const isDead = (health) => {
    if(health <=0){
    return true;
}
}

const fight = (player1, player2, player1Health, player2Health) => {
    while(true) {
    
    const attacker = (chooseOption(player1, player2));
        if (isDead (player2Health)) {
            logDeath(player1, player2);
            break
        }
        if (isDead (player1Health)) {
            logDeath(player2, player1);
            break
        }
        if (attacker===player1) {
            player2Health=attackPlayer(player2Health);
            logHealth(player2, player2Health);

        } else {
            player1Health=attackPlayer(player1Health);
            logHealth(player1, player1Health);
        }  
    }
}

fight("James","Mike",100,100);
