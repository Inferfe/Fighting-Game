//selecting elements
const player1HealthText=document.getElementById('p1Health')
const player2HealthText = document.getElementById("p2Health");
const result= document.getElementById('result')
const p1Name=document.getElementById('p1Name')
const p2Name = document.getElementById("p2Name");
const simulate= document.getElementById('play')
const reset=document.getElementById('reset')
// selecting sounds
const p1AttackSound = document.getElementById("p1attack");
const p2AttackSound = document.getElementById('p2attack');
const p1HealSound = document.getElementById("p1heal");
const p2HealSound = document.getElementById("p2heal");
const victorySound = document.getElementById("victory");




// creating class and setting methods
class Player{
    constructor(name,health){
        this.name=name
        this.health=health
    }
    strike(player){
        const random = Math.floor(Math.random() * 11);
        if(player.health-random<=0){
            player.health=0
           
        }else{
             player.health -= random;
        }
       
       
        return player.health


    }
    heal(){
        const random=Math.floor(Math.random()*11)
       if(this.health+random>= 100){
        this.health=100
       }else{ this.health+=random
        }
        return this.health;
    }
    
}
//creating players own objects

const player1=new Player('Kemal',100)
const player2= new Player('Alena',100)
// showing heroes' health on the screen
const setHealths=()=>{
player1HealthText.textContent=player1.health
player2HealthText.textContent=player2.health
}
setHealths()
//setting player names
p1Name.textContent=player1.name
p2Name.textContent=player2.name


// creating functions for players choice
const healPlayer=(player,text)=>{
    text.textContent=player.heal()
}

const strikePlayer=(player0,player1,text)=>{

     const strike = player0.strike(player1);

     if (strike === 0) {
       text.textContent = strike;
       result.textContent = `${player0.name} WON!`;
       victorySound.play()
     } else {
       text.textContent = strike;
     }



}

const resetHealths=()=>{
    player1.health=100
    player2.health=100
    result.textContent=``
    setHealths()
}

// adding events for a specific key 
document.addEventListener('keydown',function(e){
    if(e.key==='a'){
       if (player1.health > 0)  healPlayer(player1, player1HealthText) 
        p1HealSound.play();

       
} 
  
 else if(e.key==='q'){
 if (player1.health > 0) strikePlayer(player1, player2, player2HealthText);
 p1attack.play()

}
else if(e.key==='l'){
   if (player2.health > 0) healPlayer(player2, player2HealthText);
   p2HealSound.play()
}

else if(e.key==='p'){
    if(player2.health>0) strikePlayer(player2, player1, player1HealthText);
    p2AttackSound.play()

}
}
)
// implementing random game simulation
simulate.addEventListener('click',function(){
    while( player1.health>0&& player2.health>0){
        strikePlayer(player1, player2, player2HealthText);
           strikePlayer(player2, player1, player1HealthText);
        

    }
})

// implementing reset button that sets hero's healths to 100

reset.addEventListener('click',resetHealths)