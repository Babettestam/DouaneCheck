$(window).on('load', function() {
  var url_result;

  $('#berekentool-page .btn').on('click', function(){
    $("#berekentool-page .bereken-stap span").html("2");
    $("#berekentool-page .btn").html("Rond bestelling af");
    $("#berekentool-page .stap1").hide();
    $(".stap2 .berekentool-product").html($(".berekentool-product").val());
    $(".stap2 .berekentool-price span").html($(".berekentool-price").val());

    var dump;
    switch($(".stap1 .dropdown").val())
    {
      case "Geen Category":
      dump = 0;
      break;
      case "Computers en computeronderdelen":
      dump = 3;
      break;
      case "Speelgoed":
      dump = 5;
      break;
      case "Telefoontoestellen":
      dump = 4;
      break;
    }


    //
    $(".stap2 .toeslag span").html(dump+"%");
    $(".stap2 .toeslag_price span").html(parseInt($(".berekentool-price").val() * (100+dump) / 100 ));

    $(".stap2 .berekentool-category").html($(".stap1 .dropdown").val());
    
    
    $("#berekentool-page .stap2").show();
  });

  $(".berekentool-item").addClass('close');
  $('.close').find(".berekentool-detail").hide();
  
  $(".berekentool-item").on('click',function(){
    var target = $(this);

    $(".berekentool-item").not($(target)).css("background","transparent");

    if($(target).hasClass('close')){
      $(".berekentool-item .berekentool-detail").hide();
      $(target).find('.berekentool-detail').show();
      $(target).css("background-color","#d1d1d1");
    }
  })

  function getEU(url_result) {
    var eu;
    console.log (url_result);
    var url = "http://stud.cmi.hro.nl/0865336/Jaar3/douaneCheck/?url="+url_result;
    $.getJSON( url, function( json ) {
      eu = json.eu;
      euCheck(eu);
    });
  }
  chrome.tabs.getSelected(null, function(tab) {
    // remove http://
    var full_url = tab.url.replace(/.*?:\/\//g, "").split( '/' );
    var base_url = full_url[0];
    // Remove www
    if (base_url.indexOf("www") > -1) {
      base_url = base_url.replace("www.", '');
    }
    getEU(base_url);
  });
  
  // Get value true or false 
  // true == eu / false == not eu
  function euCheck (value) {
    if(value) {
      // inside eu 
      $('#outside-eu').addClass("hide");
      $('#inside-eu').removeClass("hide");
      $('.calculator-overlay').removeClass("hide");
      $('.berekentool .title').html("Geen extra toeslagen");
    } else {
      // Outside eu
      $('#outside-eu').removeClass("hide");
      $('#inside-eu').addClass("hide");
    }
  }


  // Pauzeer

  $('.switch').on ('click', function(){
    if ($('.gray-overlay').hasClass('hide')) {
      $('.gray-overlay').removeClass("hide");
      $('.switch span').html('Activeer');

    }
    else {
      $('.gray-overlay').addClass("hide");
      $('.switch span').html('Pauzeer');
    }
  });
});




