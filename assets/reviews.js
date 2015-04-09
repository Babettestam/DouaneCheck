$(document).on('ready', function() {

  var reviews = '3,2';
  reviews = reviews.replace(/,/g, '.')
  var amount = '10';

  showNumber(reviews, amount);


// NEW

// 
// Give review
// 

$("#submit").on("click", function(e){
  e.preventDefault();

  console.log("submit");
  var webshopV = $("#webshop").val();
  var commentV = $("#comment").val();
  var voteV = $("#vote").val();

  $.ajax({
   type:'POST',
   url:'http://douane.webkabouters.nl/index.php',
   data:{
     'webshop':webshopV,
     'vote':voteV,
     'comment':commentV
   },
   success:function(data){
     console.log(data);
   },
    error : function(error) {
      console.log("error");
    }
  });

  $("#webshop").val();
  var commentV = $("#comment").val();
  var voteV = $("#vote").val();
});

// /NEW

});


$('.header').on('click', function() {
  // $.get('http://stud.cmi.hro.nl/0865351/Jaar3/votePHP?name=klaas');
});


function showNumber(review, amount) {

  // Set review number
  $('.number').html( Math.round( review * 10 ) / 10 );

  // Set amount of reviews
  $('#reviews-amount').html( amount );

  // Set stars
  var percentage = review * 100 / 5;
  var maxWidth = 84;
  var setWidth = percentage * maxWidth / 100;
  $('.stars-back').css({ width: setWidth });
}




