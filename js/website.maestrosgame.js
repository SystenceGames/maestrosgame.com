window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.8)');
    $('.navbar-collapse').css('background-color', 'transparent');
  }
  else {
    $('.navbar').css('background-color', 'transparent');
  }
},false);

$(document).ready( function() {
  if ($(window).width() < 992) {
    $('.armysection').children().toggleClass('text-center')
    $('.ani1').toggleClass('center-block')
    $('#mbrand').height('75px')
    $('#socialicons').addClass('text-center')
    $('.socialicon').css('margin-top', "-15px")
  }
  else {
   $('.armysection').children().removeClass('text-center')
    $('.ani1').removeClass('center-block')
  }
});

window.addEventListener("resize", function() {
  if ($(window).width() < 992) {
    $('.armysection').children().toggleClass('text-center')
    $('.ani1').toggleClass('center-block')
    $('#mbrand').height('75px')
    $('#socialicons').addClass('text-center')
    $('.socialicon').css('margin-top', "-15px")

  }
  else {
   $('.armysection').children().removeClass('text-center')
    $('.ani1').removeClass('center-block')
    $('#mbrand').height('115px')
    $('#socialicons').removeClass('text-center')
    $('.socialicon').css('margin-top', "-100px")

  }
});

$(document).ready( function() {
  if ($(window).width() < 768) {
    $('.story').toggleClass('text-center')
    $('#minionart').removeClass('pull-right')
  }
  else {
    $('.story').removeClass('text-center')
    $('#minionart').addClass('pull-right')
  }
});

window.addEventListener("resize", function() {
  if ($(window).width() < 768) {
    $('.story').toggleClass('text-center')
    $('#minionart').removeClass('pull-right')
  }
  else {
    $('.story').removeClass('text-center')
    $('#minionart').addClass('pull-right')
  }
});

function smallmenu() {
 $('#about').on('click', function(event) {
   if (this == event.target) {
    $('.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse').css('max-height', 'none');
    $(this).parent().addClass('open');
   return false;
  }
 })
}
 
$(document).ready( function() {
   smallmenu();
 });

$(document).ready(function(){
  $('li img').on('click',function(){
    var src = $(this).attr('src');
    var img = '<img src="' + src + '" class="img-responsive"/>';
    $('#myModal').modal();
    $('#myModal').on('shown.bs.modal', function(){
      $('#myModal .modal-body').html(img);
    });
    $('#myModal').on('hidden.bs.modal', function(){
      $('#myModal .modal-body').html('');
    });
  });  
})

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
}); 

$(document).ready(function(){
  // cache the window object
  $window = $(window);
 
  $('section[data-type="background"]').each(function(){
   // declare the variable to affect the defined data-type
   var $scroll = $(this);
           
   $(window).scroll(function() {
    // HTML5 proves useful for helping with creating JS functions!
    // also, negative value because we're scrolling upwards                             
    var yPos = -($window.scrollTop() / $scroll.data('speed')); 
     
    // background position
    var coords = '50% '+ yPos + 'px';
 
    // move the background
    $scroll.css({ backgroundPosition: coords });    
   }); // end window scroll
  });  // end section function
}); // close out script

function prepareList() {
 $('#expList').find('li:has(ul)')
  .click( function(event) {
   if (this == event.target) {
    $(this).children('ul').toggle('medium');
    $(this).siblings().children('ul').slideUp('medium');
    $(this).children('i').toggleClass('glyphicon-menu-down glyphicon-menu-right');
   }
   return false;
  })
  .addClass('collapsed')
  .children('ul').hide();

 $('#expList a').unbind('click').click(function() {
  window.open($(this).attr('href'));
  return false;
 });
 };
 
 $(document).ready( function() {
   prepareList();
 });

function prepareTeam() {
 $('.photo-container img').hover(function(event) {
  $(this).css('-webkit-filter', 'grayscale(0%)')
 })
 $('.photo-container img').mouseleave(function(event) {
  $(this).css('-webkit-filter', 'grayscale(100%)')
 })
};

 $(document).ready( function() {
   prepareTeam();
 });

 $(document).ready( function() {
   $('.modal').hide();
 });
