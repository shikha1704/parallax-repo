// $(window).scroll(function(e){
//     parallax();
//   });

//   function parallax(){
//     var scrolled = $(window).scrollTop();

//   }


$(document).ready(function () {

  var containerFromTop = $('#venue').offset().top;
  var timingContainerFromTop = $('#timings').offset().top;


  $(window).scroll(function () {


    var scrollP = $(this).scrollTop();

    $('.background').css('top', -(scrollP * 0.15) + 'px');

    if (scrollP > containerFromTop - ($(window).height() / 1.5)) {

      $('#venue').each(function (i) {
        setTimeout(function () {
          $('#venue').eq(i).addClass('is-showing');
        }, 200 * i);
      });

    }

    if (scrollP > timingContainerFromTop - ($(window).height() / 1.5)) {

      $('#timings').each(function (i) {
        setTimeout(function () {
          $('#timings').eq(i).addClass('is-showing');
        }, 200 * i);
      });

    }


    $('.box1').css({
      'transform': 'translate(0px,' + scrollP / 4 + '%)'
    });
    $('.box2').css({
      'transform': 'translate(0px,' + scrollP / 2 + '%)'
    });
    $('.box3').css({
      'transform': 'translate(0px,' + scrollP / 4 + '%)'
    });
    $('.box4').css({
      'transform': 'translate(0px,' + scrollP / 2 + '%)'
    })
    $('.box5').css({
      'transform': 'translate(0px,' + scrollP / 4 + '%)'
    });
    $('.box6').css({
      'transform': 'translate(0px,' + scrollP / 2 + '%)'
    });
    $('.box7').css({
      'transform': 'translate(0px,' + scrollP / 4 + '%)'
    });
    $('.box8').css({
      'transform': 'translate(0px,' + scrollP / 2 + '%)'
    });
    $('.box9').css({
      'transform': 'translate(0px,' + scrollP / 4 + '%)'
    });
  });

});