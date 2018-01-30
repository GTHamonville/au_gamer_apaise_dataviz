/* Change background of the game displayed */
var current_type = 'spec';
var current_game = "League of Legends";

$('#lol').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/lolv2.jpg)');
    current_game = "League of Legends";
    reload();
});

$('#bf3').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/bf3v2.jpg)');
    current_game = "Battlefield";
    reload();
});

$('#swtor').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/swotor2.jpg)');
    current_game = "Star Wars";
    reload();
});

$('#sky').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/skyrim2.jpg)');
    current_game = "The Elder Scrolls";
    reload();
});


/* Change line choice barchart */

$('#spec').click(function () {
    $('#gliss_img').attr('src', 'style/img/glissiere_pos1.jpg');
    current_type = "spec";
    reload();
});

$('#strm').click(function () {
    $('#gliss_img').attr('src', 'style/img/glissiere_pos2.jpg')
    current_type = "stream";
    reload();
});

$('#ratio').click(function () {
    $('#gliss_img').attr('src', 'style/img/glissiere_pos3.jpg')
    current_type = "ratio";
    reload();
});