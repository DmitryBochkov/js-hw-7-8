$(document).ready(function() {
  // TABS
  $('.tab-list li').click(function (e) {
    e.preventDefault();
    var thisContent = $(this).find('a').attr('href');
    $('.tab-list li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content > div').removeClass('active');
    $(thisContent).addClass('active');
  });

  // FORM WITH TOOLTIPS
  $('input').parent().append("<span class='tooltip'></span>");
  function inputFadeIn() {
    var hoverText = $(this).attr("title");
    $(this).removeAttr("title");
    $(this).parent().find(".tooltip").text(hoverText);
    $(this).parent().find(".tooltip").stop().fadeIn();
  };
  function inputFadeOut() {
    $(this).parent().find(".tooltip").stop().fadeOut();
  };
  function inputFadeToggle() {
    $('input').each(function () {
      var hoverText = $(this).attr("title");
      $(this).removeAttr("title");
      $(this).parent().find(".tooltip").text(hoverText);
      $(this).parent().find(".tooltip").stop().fadeToggle();
    });
  };

  $('input').hover(inputFadeIn, inputFadeOut);
  $('input').focusin(inputFadeIn);
  $('input').focusout(inputFadeOut);

  $("<button>")
  .text("Show help")
  .insertAfter("form")
  .css({
    padding: '5px 10px'
  });
  $("button").click(inputFadeToggle);
});
