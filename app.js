$(function() {
    $("img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "b.png";
            $(this).attr("src", src);
            $(this).flip();
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("b.png", ".png");
            $(this).attr("src", src);
        });


$( ".linkdead" ).click(function( event ) {
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});

     
});