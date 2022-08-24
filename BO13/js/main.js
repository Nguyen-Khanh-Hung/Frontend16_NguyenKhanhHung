let toggle=true
$(document).ready(function (e) {
    $('#backRed').click(function (e) { 
        e.preventDefault();
        toggle?$(this).css('backgroundColor', 'yellow'): $(this).css('backgroundColor','red')
        toggle=!toggle
    });
   
});