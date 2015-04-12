// Defined variables

var wordsToDetect = 3;

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
  "add to cart",
  "shoppingbasket",
  "shoppingbaskets",
  "shopping-basket",
  "shopping-baskets",
  "webwinkel",
  "web-winkel",
  "online shopping",
  "free shipping",
  "buy cheap",
  "korting",
  "discount",
  "aanbieding",
  "aanbiedingen",
  "retour sturen",
  "afrekenen",
  "delivery time",
  "payment methods",
  "my order(s)",
  "my order",
  "my orders",
  "coupon code",
  "voucher code",
  "remove from cart",
  "check availability",
  "check out",
  "check-out"
];

// 
// Request source of current page
// 

$(document).on('ready', function() {
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
      if( counter == webshop_words.length && countSuccess < wordsToDetect ) {
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




