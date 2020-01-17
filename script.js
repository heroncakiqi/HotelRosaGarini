$(document).ready(function() {
  $( ".datepicker" ).datepicker();

  $(".down").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#reservation-wrapper").offset().top
      },
      800
    );
  });

  $('.right').click(function() {
    const current = $('.active');
    const next = current.next();
    if(next.length) {
      current.removeClass('active');
      next.addClass('active')
    } else {
      current.removeClass('active');
      current.prevAll().addClass('active')
    }
  });
  $('.left').click(function() {
    const current = $('.active');
    const prev = current.prev();
    if(prev.length) {
      current.removeClass('active');
      prev.addClass('active')
    } else {
      current.removeClass('active');
      current.nextAll().addClass('active')      
    }
  })

  setInterval(function() {
      const current = $('.active');
      const next = current.next();
      if(next.length) {
        current.removeClass('active');
        next.addClass('active')
      } else {
        current.removeClass('active');
        current.prevAll().addClass('active')
      }

  },4000)
});