/* Change background of the game displayed */
var current_type = 'spec';
var current_game = "League of Legends";

$('#lol').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/lolv3.png)');
    current_game = "League of Legends";
    $('#vert_img').attr('src', 'style/img/vert_pos1.jpg');
    reload();
});

$('#bf3').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/bf3v3.png)');
    current_game = "Battlefield";
    $('#vert_img').attr('src', 'style/img/vert_pos2.jpg');
    reload();
});

$('#swtor').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/swotor3.png)');
    current_game = "Star Wars";
    $('#vert_img').attr('src', 'style/img/vert_pos3.jpg');
    reload();
});

$('#sky').click(function () {
    $('#joyplot').css('background-image', 'url(style/img/skyrim3.png)');
    current_game = "The Elder Scrolls";
    $('#vert_img').attr('src', 'style/img/vert_pos4.jpg');
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