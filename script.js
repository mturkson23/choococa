// Check if the user is ready to play!
//all vars come first
var userAnswer;
var feedback;
//texts
var first = "This adventure can get quite dangerous. Get ready for we are about to hit the road ! ;)";
var second = "Before then, how old are you ?";
var third = "You do know you are too young to face such grave danger ? Oh well, you can still go ahead but on your own discretion ...\n";
var fourth = "Welcome par'dna ! You're all set to play!\n";
var fifth = "Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.\n";
var sixth = "Batman glares at you.\n";
var seventh = "Are you feeling lucky, punk ? (yes / no)\n";
var eight = "Batman hits you very hard. It's Batman and you're you! Of course Batman wins!\n";
var nine = "You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.\n";
var ten = "I know the script sucks. I mean, it wasnt written by Donald Glover or directed by Scorsese. But please rate this for me :)";
var eleven = "This is just the beginning of my game empire. Stay tuned for more!";
var twelve = "I slaved away at this game and you gave me that score?! The nerve! Just you wait!";
// actual code
// popup to confirm user's willingness
confirm(first);
var age;
// ask for user's age to validate
age = prompt(second);
if(age<18)
{
    // warn user of being too young but, letting them play any way
    console.log(third);
}else{
    // welcome them to the club !
    console.log(fourth);
}
// console.log() out story line 
console.log(fifth);
console.log(sixth);
// check and use player's answer to continue
userAnswer = prompt(seventh);
if(userAnswer === "yes" || "y")
{  
    // I guess this says it all 
    console.log(eight);
}else{
    console.log(nine);
}
// some feedback would be nice
feedback = prompt(ten);
if(feedback > 8)
{
    console.log(eleven);
}else{
    console.log(twelve);
}

