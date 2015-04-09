// Defined variables

var webshop_words = [
  "webshop",
  "web-shop",
  "web shop",
  "winkelwagen",
  "winkelmandje",
  "winkelmand",
  "winkelmandjes",
  "shoppingcart",
  "shoppingcarts",
  "shopping-cart",
  "shopping-carts",
  "shopping cart",
  "shopping carts",
  "shopping basket",
  "shopping baskets",
  "shoppingbasket",
  "shoppingbaskets",
  "shopping-basket",
  "shopping-baskets",
  "webwinkel",
  "web-winkel",
  "online shopping",
  "free shipping",
  "buy cheap"
];

var wordsToDetect = 2;


$(document).on('ready', function() {
  // 
  // Request source of current page
  // 

  chrome.tabs.executeScript(
    { 
      code: "document.getElementsByTagName('html')[0].innerHTML;"
    }, 
    function (ps1) {
      readPage(ps1);
    }
  );
});

// 
// Check if page is webshop
// 

function readPage( source ) {
  if( source ) {
    var countSuccess = 0;
    var counter = 0;

    webshop_words.forEach(function(word) {
      counter ++
      if( source.toString().toLowerCase().indexOf(word) > -1 ) {
        countSuccess ++;
      }
      if( countSuccess >= wordsToDetect) {
        webshopDetected();
        return;
      }
      if (counter == webshop_words.length && countSuccess < wordsToDetect) {
        noWebshop();
      }
    });
  }
}

// 
// Page is a webshop
// 

function webshopDetected() {
  console.log('WEBSHOPPPPPPP');
}

// 
// Page is not a webshop
// 

function noWebshop() {
  console.log('no webshop :(');
}




