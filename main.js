//stylying h1
$('h1').css( { color: 'white', fontWeight: 'bold' } )
        .css('background-color', '#03bafc')
        .css('padding', '15px')
        .css('width', '500px')
        .css('text-align', 'center');

//First user story
//creates and adds li to ul, clears input, removes li on click
$('#btn').click(function() {
    let inputVal = $('#inp').val();
    if(inputVal){
        $('#ulEl').append('<li>' + inputVal); //creates and adds li to ul
        $('#inp').val('') //clears input
    }  
    //removes li on click
    $( "li" ).click(function() {
        $(this).remove();
      });
});