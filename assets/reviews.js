$(document).on('ready', function() {
  reviewsLoad();

  $('#vote span').on( 'click', function () {
    $('#vote span').removeClass('active');
    $(this).addClass('active');
  });

  

  // NEW

  // 
  // Give review
  // 

  $("#submit").on("click", function(e){
    e.preventDefault();

    console.log("submit");
    var webshopV = $("#webshop").val();
    var commentV = $("#comment").val();
    var voteV = $("#vote span.active").data('rate');
    var authorV = "Piet Klaas";
    var titleV = $("#titleV").val();

    $.ajax({
     type:'POST',
     url:'http://douane.webkabouters.nl/index.php',
     data:{
       'webshop':webshopV,
       'vote':voteV,
       'comment':commentV,
       'author':authorV,
       'title':titleV
     },
     success:function(data){
      console.log(data);
       slideToPage($('#review-succes'));

       // REMOVE ADD REVIEW BUTTON
     }
    });
  });

  // /NEW

});


$('.header').on('click', function() {
  // $.get('http://stud.cmi.hro.nl/0865351/Jaar3/votePHP?name=klaas');
});

function reviewsLoad() {

  chrome.tabs.getSelected(null, function(tab) {
    // remove http://
    var full_url = tab.url.replace(/.*?:\/\//g, "").split( '/' );
    var base_url = full_url[0];
    // Remove www
    if (base_url.indexOf("www") > -1) {
      base_url = base_url.replace("www.", '');
    }
    getReviews(base_url);
    $('#webshop').val(base_url);
    $('#url').html(' '+base_url);
  });
}

function getAverage(stars_amount, stars_total) {
  var average = Math.round( stars_total / stars_amount * 10 ) / 10;

  showNumber(average, stars_amount);

  $('#average').html(average);
}

function showNumber(review, amount) {

  // Set review number
  $('.number').html( review );

  // Set amount of reviews
  $('#reviews-amount').html( amount );

  // Set stars
  var percentage = review * 100 / 5;
  var maxWidth = 84;
  var setWidth = percentage * maxWidth / 100;
  $('.stars-back').css({ width: setWidth });
}

function getReviews (url) {
  $.get('http://douane.webkabouters.nl/allReviews.php?url='+url, function(data) {
    var stars_total = 0;
    var review1_empty = true;
    var review2_empty = true;

    data.forEach(function(entry) {
      var webshop = entry['webshop'];
      var title = entry['title'];
      var author = entry['author'];
      var stars = entry['stars'];
      var comment = entry['comment'];
      var date = entry['date'];

      stars_total = parseInt(stars_total) + parseInt(stars);

      if (review1_empty) { 
        fillReview("#review1", title, webshop, stars, comment, author, date) ;
        review1_empty = false;
      }
      else if (review2_empty) { 
        fillReview("#review2", title, webshop, stars, comment, author, date) 
        review2_empty = false;
      }
    });

    getAverage (data.length, stars_total);
  });
}
function fillReview (wrapper, title, webshop, stars, comment, author, date) {
  $(wrapper + " .review_title").html( title );
  $(wrapper + " #stars").html( stars );
  $(wrapper + " .review_content").html( comment );
  $(wrapper + " .author").html( author );
  $(wrapper + " .date").html( date );
}



