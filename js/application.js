$(function() {
  
  $("input[placeholder], textarea[placeholder]").placeholder();
  
  /* navigation */
  $('.navigation .parent').on('click', function() {
    var links = $('.navigation .parent');
    var link = $(this);
    var subnav = link.children('.subnav');
    
    if(!$(event.target).closest('.navigation .visible').length) {
      links.removeClass('visible');
    }
    link.toggleClass('visible');
    return false;
  });
  
  $(document).click(function(event) { 
    if(!$(event.target).closest('.navigation .visible').length) {
      $('.navigation .visible').removeClass('visible');
    }        
  })
  /* end */
  
  /* quick search */
  $('.header .search_icon').on('click', function() {
    $('.quick_search').show(0);
    $('.quick_search .search_field').focus();
    $('.navigation ul li:last-child').prev('li').andSelf().hide(0);
  });
  
  $('.quick_search .search_field').on('focusout', function() {
    if($(this).val().length === 0 ) {
      $('.quick_search').hide(0);
      $('.navigation ul li:last-child').prev('li').andSelf().show(0);
    }
  });
  /* end */
  
  /* customize meny */
  $('.header .bottom_row a.customize_link').on('click', function() {
    var customize_menu = $('.header .bottom_row .customize_menu');
    
    if(customize_menu.is(':hidden')) {
      customize_menu.slideDown(150);
    }
    else {
      customize_menu.slideUp(150);
    }
  });
  /* end */
  
  /* scoreboard tile */
  $('.my_scoreboard_tile .scoreboard_block .caption').on('click', function() {
    $(this).parent().toggleClass('opened');
  });
  /* end */
  
  /* upload file fields */
  var fileInput = $('.upload_field');
  
  fileInput.change(function() {
    $this = $(this);
	var filename_text = $this.val().split("\\").pop();
	
	if(filename_text.length > 23) {
	  var current_text = jQuery.trim(filename_text).substring(0, 22).slice(0, -1) + "...";
	}
	else {
	  current_text = filename_text
	}
	
	$('.upload_cover').text(current_text);
  })
  /* end*/
  
});