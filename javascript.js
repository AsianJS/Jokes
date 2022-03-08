var quotes = [
  'Why was 9 afraid of 7?',
  'What do you call a man with no arms or legs, laying in front of your door?',
  'Why do Nordic military ships have barcodes?',
  'What did the dividing cell say when his sister stepped on his foot?',
];
var punchlines = [
  "Because of 789!",
  'Matt!',
  'To scan-the-navy-in!',
  'That\'s my toe sis!',
];

var randomNumber = 0;
var thing;

function random(){
  randomNumber = Math.floor(Math.random() * (quotes.length));
  return randomNumber;
  };

function newQuote(){
  thing = random();
  console.log(thing);
  document.getElementById('quoteDisplay').innerHTML = quotes[thing];

};
function punchline(){

  document.getElementById('quoteDisplay').innerHTML = punchlines[thing];
};
