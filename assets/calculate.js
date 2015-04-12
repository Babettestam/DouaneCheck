$(document).ready( function() {
  
  $('#berekentool-page .btn').on('click', function(){
    $("#berekentool-page .bereken-stap span").html("2");
    $("#berekentool-page .btn").html("Rond bestelling af");
    $("#berekentool-page .stap1").hide();
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
});

function checkExtraPrice(start_price) {
  switch (start_price) {
    case: < 22
      return start_price
    case: < 150
      start_price += 
      return 
  }
}