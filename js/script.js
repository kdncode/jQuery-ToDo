// Check off specific task
$('li').click(function() {
    $(this).toggleClass('completed')
})

// Click on X to remove task
$('span').click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation()
})

// Keypress on textbox
$('input[type="text"]').keypress(function(event) {
    
    if (event.which === 13 ) {

        // Grab new todo text from input
        var todoText = ($(this).val());

        $(this).val('')

        // Create a new li and add to ul
        $('ul').append('<li><span>X</span> ' + todoText + '</li>')
        
        
    }
})