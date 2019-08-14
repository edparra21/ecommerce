function showSideBar(){
    
    document.getElementById("sbColumn").style.display = "block";
}

function hideSideBar(){
    
    document.getElementById("sbColumn").style.display = "none";
}

(function ($) {

    $('.fa-hamburger').on('click', function clickHandler(e) {
      e.preventDefault();
      $('.magic-container').toggleClass('closed');
    });
    
    })(jQuery);