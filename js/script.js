// Check off specific task
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed')
})

// Click on X to remove task
$('ul').on('click', 'span', function(event) {
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
        $('ul').append('<li>' + todoText + ' <span><i class="far fa-trash-alt"></i></span></li>')
 
    }
})

// Optional: add toggle todo icon 
$('.fa-list-ul').click(function() {
    $('input[type="text"]').fadeToggle();
});