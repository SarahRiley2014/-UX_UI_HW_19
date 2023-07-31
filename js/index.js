console.log("Your index.js file is loaded correctly!");


$( ".btn" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

var container = $('div');

function scrollParagraph1() {
	var scrollTo = $("#p1");
    var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
	container.animate({
		scrollTop: position
	});
} 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });

});