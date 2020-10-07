'use strict';

alert('Hello there! You will play a tiny fun game to see how much you know me!');
alert('The game has 2 rounds. Are you ready?');

var score = 0;

var userName = prompt('First, let me know your name :)');
console.log(userName);

alert(`Ya welcome ya welcome ${userName}! You can only answer using y/n or Yes/No, deal?`);

function firstQuestion (){
var favColor = prompt(`So ${userName}, Is purple my favorite color?`);
console.log(favColor);
favColor.toLowerCase();
console.log(favColor);
if (favColor === 'y' || favColor === 'yes') {
    alert('Correct! Fatima loves purple and purple loves Fatima<3');
    score++;
} else if (favColor === 'n' || favColor === 'no') {
    alert('Opps! that was not correct, actually purple is my fav color.')
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
console.log(score);
}

firstQuestion () ;
var favField = prompt(`Now for the second question ${userName}, Is Machine Learning my (study) area of interest?`);
console.log(favField);
favField.toLowerCase();
console.log(favField);
if (favField === 'y' || favField === 'yes') {
    alert('Yay! That was correct :) NLP is the filed of ML I work on');
    score++;
} else if (favField === 'n' || favField === 'no') {
    alert('Uh-Oh, it\'s ok that was a hard question')
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
console.log(score);

var sport = prompt(`The third question is coming ${userName}, So, do I play Karate?`);
console.log(sport);
sport.toLowerCase();
console.log(sport);
if (sport === 'y' || sport === 'yes') {
    alert(`I really appreciate you answred this correctly lol! and yes I used to play Karate and got the black belt.`);
    score++;
} else if (sport === 'n' || sport === 'no') {
    alert('Maybe if we had a match you would answer the question right.')
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
console.log(score);

var food = prompt(`Forth question ${userName}, Is Mansaf the only dish I can cook?`);
console.log(food);
food.toLowerCase();
console.log(food);
if (food === 'y' || food === 'yes') {
    alert('I can already smell the Jameed! Good job that was correct! wish me good luck in cooking the rest of food :(');
    score++;
} else if (food === 'n' || food === 'no') {
    alert('Did you just answered with "NO" to Mansaf?!');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
console.log(score);

var asac = prompt(`Final question of the first round ${userName}, I'm happy with ASAC?`);
console.log(asac);
asac.toLowerCase();
console.log(asac);

switch (asac) {
    case 'y':
    case 'yes':
        alert('Imagin if MY answer is no lol. That was correct! how did you know that? Ehm Ehmm.');
        score++;
        break;
    case 'n':
    case 'no':
        alert('Wait what? Is that a trick or something? I swear I love ASAC!');
        break;
    default:
        alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
console.log(score);

alert('Now for the second round! Ready?')

var myAge;
for (var ii=0; ii<4; ii++){
    myAge = prompt('Can you guess my age?');
    if (myAge == 22) {
        alert('Correct!');
        score++;
        break;}
    else if (myAge <= 21) {
        alert('Ops! too low.');
    }else if (myAge >= 23) {
        alert('Uh-oh! too high!');  
    }else {
        alert('Try again')
    }
}
console.log(myAge);
alert('My age is 22');
console.log(score);


var mySongs = ['mountain', 'believer', 'worriors', 'fighter'];
var favSong;
for (var i = 0; i < 6; i++) {
        favSong = prompt('Can you guess one of my favorite songs?');
        if (favSong == 'mountain' || favSong == 'believer' || favSong == 'worriors' || favSong == 'fighter') {
            alert('Correct!');
            score++;
            break;
        } else {
            alert('Try again');
        }
      /*  
      for(var j=0; j<mySongs.length; j++){
                   if(favSong == mySongs[j]){
                       score++;
                       j=6;
                       break ;
                   }
             }*/
    }
console.log(favSong);    
alert(`My favorite songs are ${mySongs}`);

alert(`Thank you ${userName} for playing the game! Your score is ${score} out of 7`);

