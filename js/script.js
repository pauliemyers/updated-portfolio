$(document).ready(function () {
    $('#navigation').hide();
    $('myershome').hide();
    var topOfContent = $('#content').offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > topOfContent) {
                $('#navigation').fadeIn("fast");
                $('#myershome').fadeIn("fast");
            } else {
            $('#navigation').fadeOut("fast");
            $('#myershome').fadeOut("fast");
            }
        });
});

$('#myershome').click(function () {
    $('body,html').animate({scrollTop:0},500);
});