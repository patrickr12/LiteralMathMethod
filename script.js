// 1a
let warmHugs = "Hi\, I\'m Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// OR
// console.log(warmHugs.replace("like", "love"));

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// console.log(beenImpaled.slice(18, 36));

// OR
// console.log(beenImpaled.slice(18));

// OR
console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
/*
let randomNumber = Math.random(); // 0 through 0.999999
randomNumber *= 3; // 0 to 2.999999
randomNumber = Math.floor(randomNumber); // gets rid of decimal (0 to 2)
randomNumber ++;
console.log(randomNumber);
*/

// OR
let randomNumber = Math.floor(Math.random()*3 + 1);
console.log(randomNumber);

// OR
// FLOOR IS STILL BEST PRACTICE
/*
let randomNumber = Math.ceil(Math.random()*3);
console.log(randomNumber);
*/

// BONUS
// 6
// let go = "Let It Go!";
// console.log(go.toUpperCase().repeat(2));

// OR
// console.log(" Let It Go!".repeat(2).toUpperCase());
console.log(" Let It Go!".repeat(2).toUpperCase().trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replaceAll(" ", "_"));

// OR
// console.log(reindeers.replace(/ /gi, "_"));

// OR
// console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));

// 8
console.log(Math.sqrt(2));

// OR
// console.log(Math.SQRT2);

// 9
// let newRandomNumber = Math.floor((Math.random()*(23-7+1)+7));

// OR
let newRandomNumber = Math.floor((Math.random()*(17)+7));
console.log(newRandomNumber);
