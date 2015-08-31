$(document).ready(function(){
  $('#p1').click(function(){
    $('.page').css("opacity","0.7").css("transition","all 0.5s linear");
    $('#page1').css("opacity","0");
  });
  $('#p2').click(function(){
    $('.page').css("opacity","0.7").css("transition","all 0.5s linear");
    $('#page2').css("opacity","0");
  });
  $('#p3').click(function(){
    $('.page').css("opacity","0.7").css("transition","all 0.5s linear");
    $('#page3').css("opacity","0");
  });
  $('#p4').click(function(){
    $('.page').css("opacity","0.7").css("transition","all 0.5s linear");
    $('#page4').css("opacity","0");
  });
  $('#p5').click(function(){
    $('.page').css("opacity","0.7").css("transition","all 0.5s linear");
    $('#page5').css("opacity","0");
  });
  $('#live-play-button').click(function(){
    $('.page').css("opacity","0").css("transition","all 0.5s linear");
  });
});

//jQuery Plugin Initialization
$(document).ready(function(){
    $('.modal-trigger').leanModal();
    /*
    $("#p1").click(function(){
     $("#volume_player").css("display","inline");
    });
    */
});