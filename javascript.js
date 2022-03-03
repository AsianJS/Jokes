var quotes = {
  'Why was 9 afraid of 7? - Because of 789!',
  'What do you call a man with no arms or legs, laying in front of your door? - Matt!',
}
function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quote.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
