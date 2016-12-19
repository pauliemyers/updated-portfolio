//navigation scripts

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

//games scripts

$(document).ready(function () {
    $('#youAreHereDiv').hide();
    $('#lSystemDiv').hide();
    $('#turtleDiv').hide();
    $('#gameOfLifeDiv').hide();
    $('#spirographDiv').hide();
    $('#backbutton2').hide();
});

$('#youAreHereButton').click(function () {
    $('#gamesIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#youAreHereDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#lSystemButton').click(function () {
    $('#gamesIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#lSystemDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#turtleButton').click(function () {
    $('#gamesIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#turtleDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#gameOfLifeButton').click(function () {
    $('#gamesIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#gameOfLifeDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#spirographButton').click(function () {
    $('#gamesIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#spirographDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#backbutton2').click(function () {
    $('#gamesIcons').fadeIn("fast");
    $('#backbutton1').fadeIn("fast");
    $('#youAreHereDiv').fadeOut("fast");
    $('#lSystemDiv').fadeOut("fast");
    $('#turtleDiv').fadeOut("fast");
    $('#gameOfLifeDiv').fadeOut("fast");
    $('#spirographDiv').fadeOut("fast");
    $('#backbutton2').fadeOut("fast");
});

//sound scripts


//ideapro scripts

$(document).ready(function () {
    $('#theCyoubDiv').hide();
    $('#backbutton2').hide();
});

$('#theCyoubButton').click(function () {
    $('#ideaproIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#theCyoubDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#backbutton2').click(function () {
    $('#ideaproIcons').fadeIn("fast");
    $('#backbutton1').fadeIn("fast");
    $('#theCyoubDiv').fadeOut("fast");
    $('#backbutton2').fadeOut("fast");
});

//modeling scripts

$(document).ready(function () {
    $('#pipesDiv').hide();
    $('#stillLifeDiv').hide();
    $('#final1Div').hide();
    $('#final2Div').hide();
    $('#backbutton2').hide();
});

$('#pipesButton').click(function () {
    $('#modelingIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#pipesDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#stillLifeButton').click(function () {
    $('#modelingIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#stillLifeDiv').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#final1Button').click(function () {
    $('#modelingIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#final1Div').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#final2Button').click(function () {
    $('#modelingIcons').fadeOut("fast");
    $('#backbutton1').fadeOut("fast");
    $('#final2Div').fadeIn("fast");
    $('#backbutton2').fadeIn("fast");
});

$('#backbutton2').click(function () {
    $('#modelingIcons').fadeIn("fast");
    $('#backbutton1').fadeIn("fast");
    $('#pipesDiv').fadeOut("fast");
    $('#stillLifeDiv').fadeOut("fast");
    $('#final1Div').fadeOut("fast");
    $('#final2Div').fadeOut("fast");
    $('#backbutton2').fadeOut("fast");
});