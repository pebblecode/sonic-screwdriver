$( '.ad-1' ).click( function() {
  $( '.panel-3, .panel-4, .pick-ad').remove();
});

$( '.ad-2' ).click( function() {
  $( '.panel-2, .panel-4, .pick-ad').remove();
});

$( '.ad-3' ).click( function() {
  $( '.panel-2, .panel-3, .pick-ad').remove();
});

function slidePanel() {
  $( '.panel' ).toggleClass( 'active' );
}