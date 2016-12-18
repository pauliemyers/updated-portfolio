$(document).ready(function () {
    $('#navigationhome').hide();
    $('#navigation').hide();
    $('#myershome').hide();
    $('#myers').hide();
    $('#bottomnav').hide();
    var topOfContent = $('#content').offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > topOfContent) {
                $('#navigationhome').fadeIn("fast");
                $('#navigation').fadeIn("fast");
                $('#myershome').fadeIn("fast");
                $('#myers').fadeIn("fast");
                $('#backbutton1').fadeOut("fast");
                $('#bottomnav').fadeOut("fast");
            } else {
            $('#navigationhome').fadeOut("fast");
            $('#navigation').fadeOut("fast");
            $('#myershome').fadeOut("fast");
            $('#myers').fadeOut("fast");
            $('#backbutton1').fadeIn("fast");
            }
        });
});

$('#myershome').click(function () {
    $('body,html').animate({scrollTop:0},300);
});

$('#backbutton1').click(function () {
    $('#bottomnav').fadeIn("fast");
});