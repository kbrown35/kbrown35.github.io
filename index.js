$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});


const myCalendar = new TavoCalendar('#my-calendar', {
    // settings here
})

const myCalendar = new TavoCalendar('#my-calendar', {
    date: "2020-03-15"
})

const myCalendar = new TavoCalendar('#my-calendar', {
    format: "MM-DD-YYYY"
})

const myCalendar = new TavoCalendar('#my-calendar', {
    multi_select: false,
    future_select: true,
    past_select: false,
    frozen: false
})