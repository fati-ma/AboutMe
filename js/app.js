'use strict'

alert('Hello there! You will play a tiny fun game to see how much you know me!');
alert('Are you ready?');

var userName= prompt('First, let me know your name :)');
console.log(userName);

alert(`Ya welcome ya welcome ${userName}! You can only answer using y/n or Yes/No, deal?`);

var favColor = prompt(`So ${userName}, Is purple my favorite color?`);
console.log(favColor);
favColor.toLowerCase();
console.log(favColor);
if (favColor === 'y' || favColor === 'yes'){
    alert('Correct! Fatima loves purple and purple loves Fatima<3');
} else if(favColor === 'n' || favColor === 'no'){
    alert('Opps! that was not correct, actually purple is my fav color.')
} else{
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}

var favField = prompt(`Now for the second question ${userName}, Is Machine Learning my (study) area of interest?`);
console.log(favField);
favColor.toLowerCase();
console.log(favField);
if (favField === 'y' || favField === 'yes'){
    alert('Yay! That was correct :) NLP is the filed of ML I work on');
} else if(favField === 'n' || favField === 'no'){
    alert('Uh-Oh, it\'s ok that was a hard question')
} else{
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}

var sport = prompt(`The third question is coming ${userName}, So, do I play Karate?`);
console.log(sport);
favColor.toLowerCase();
console.log(sport);
if (sport === 'y' || sport === 'yes'){
    alert(`I really appreciate you answred this correctly lol! and yes I used to play Karate and got the black belt.`);
} else if(sport === 'n' || sport === 'no'){
    alert('Maybe if we had a match you would answer the question right.')
} else{
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}

var food = prompt(`Forth question ${userName}, Is Mansaf the only dish I can cook?`);
console.log(food);
favColor.toLowerCase();
console.log(food);
if (food === 'y' || food === 'yes'){
    alert('I can already smell the Jameed! Good job that was correct! wish me good luck in cooking the rest of food :(');
} else if(food === 'n' || food === 'no'){
    alert('Did you just answered with "NO" to Mansaf?!');
} else{
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}

var asac = prompt(`Final question ${userName}, I'm happy with ASAC?`);
console.log(asac);
favColor.toLowerCase();
console.log(asac);

switch(asac){
    case 'y': 
    case 'yes':
        alert('Imagin if MY answer is no lol. That was correct! how did you know that? Ehm Ehmm.');
        break;
    case 'n':
    case 'no':
        alert('Wait what? Is that a trick or something? I swear I love ASAC!');
        break;
    default:
        alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');

}
alert(`Thank you ${userName} for playing the game!`);

