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

var randomNumber;
var joke;
function random(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  console.log(quotes[randomNumber]);
};
function newQuote(){
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};
function punchline(){
  document.getElementById('quoteDisplay').innerHTML = punchlines[randomNumber];
};
var randomNumber = Math.floor(Math.random() * (quotes.length));
