$(document).ready( function() {
  $('#inside-eu, #outside-eu').on ('click', function() {
    slideToPage($('#eu-information-page'));
  });

  $(".back-icon").on('click',function(){
    slideToPage($('#page'));
  });

  $('.berekentool').on ('click', function() {
    slideToPage($('#berekentool-page'));
    $(".stap1").show();
    $(".stap2").hide();
  });

  $('.beoordeling').on ('click', function() {
    slideToPage($('#show-review'));
  });

  $('.to-give-review').on ('click', function() {
    slideToPage($('#give-review'));
  });

  $('.to-home-screen').on ('click', function() {
    slideToPage($('#page'));
  });

  $('.settings').on ('click', function() {
    slideToPage($('#info-detail'));
  });

  $('#more-info').on ('click', function() {
    chrome.tabs.create({url: 'http://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/campagnes/landingspaginas/prive/internetaankopen/internetaankopen', selected: true});
  }); 

  $('.www').on ('click', function() {
    chrome.tabs.create({url: 'http://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/campagnes/landingspaginas/prive/internetaankopen/internetaankopen', selected: true});
  });

  $('.twitter').on ('click', function() {
    chrome.tabs.create({url: 'https://twitter.com/douane', selected: true});
  });

  $('.facebook').on ('click', function() {
    chrome.tabs.create({url: 'https://www.facebook.com/douane', selected: true});
  });
});

function slideToPage(page) {
  $('.current').removeClass('current');
  page.addClass('current');
}
