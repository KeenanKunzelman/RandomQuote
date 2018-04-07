var colorArr = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

var quotesArr = ['"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."',
'"Every once in a while, a new technology, an old problem, and a big idea turn into an inovation"',
'"New technology is not good or evil in and of itself. It\'s all about how people chose to use it"',
'"Just because something doesn’t do what you planned it to do doesn’t mean it’s useless."',
'"It has become appallingly obvious that our technology has exceeded our humanity."']
var authorsArr = ['Bill Gates','Dean Kamen','David Wong','Thomas Edison', 'Albert Einstein']
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var quoteObj = {
  quoteId: undefined,
  quoteCol: undefined
}

function setQuoteData() {

  var quote = getRandomInt(quotesArr.length);
  var author = quote;
  var color = getRandomInt(colorArr.length);

  if (quote === quoteObj.quoteId || quote === quoteObj.quoteCol) {

    setQuoteData();

  }
  else {
    $(".quote-text").fadeOut(function(){
      $(this).text(quotesArr[quote]);
    }).fadeIn();
    // $(".quote-text").text();
    $(".quote-text").css("color", colorArr[color]);
    $("#quote").css("background-color", colorArr[color]);
    $("body").css("background-color", colorArr[color]);
    $(".author").fadeOut(function(){
      $(this).text(authorsArr[quote]);
    }).fadeIn();
    // $(".author").text(`-${authorsArr[author]}`)
    quoteObj.quoteId = quote;
    quoteObj.quoteCol = color;
  }

}


$(document).ready(function(){
  setQuoteData();
  $( "#quote" ).click(function() {
    setQuoteData();
  });
});
