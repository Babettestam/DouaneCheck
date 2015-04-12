$(window).on('load', function() {
  var url_result;
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




