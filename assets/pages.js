$(document).ready( function() {
  $('#inside-eu, #outside-eu').on ('click', function() {
    slideToPage($('#eu-information-page'));
  });

  $('.berekentool').on ('click', function() {
    slideToPage($('#eu-information-page'));
  });

  $('#more-info').on ('click', function() {
    chrome.tabs.create({url: 'http://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/campagnes/landingspaginas/prive/internetaankopen/internetaankopen', selected: true});
  });
});

function slideToPage(page) {
  $('.current').removeClass('current');
  page.addClass('current');
}
