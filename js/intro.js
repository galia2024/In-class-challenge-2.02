//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
    $('#box').hide();

    $('#toggle').click(function(event) {
        $('#box').css('background-color', 'lightblue'); 
        $('#box').toggle();
        event.stopPropagation(); 
    });

    // Toggle  between a circle and square on box click
    $('#box').click(function(event) {
        $(this).toggleClass('circle');
        event.stopPropagation();
    });

        // Change CSS  when name is clicked
    $('#name').click(function(event) {
        $('#box').css('background-color', 'red');
        event.stopPropagation(); // Prevent click from bubbling to document
    });

    // Change box color when the challenge text is clicked
    $('#challenge').click(function(event) {
        $('#box').css('background-color', 'white');
        event.stopPropagation(); // Prevent click from bubbling to document
    });

     // change the box/circle to black if clicked outside
    $(document).click(function() {
        $('#box').css('background-color', 'black');
    });

    $('#reset').click(function() {
        location.reload(); // Simply reload the page
    });
});