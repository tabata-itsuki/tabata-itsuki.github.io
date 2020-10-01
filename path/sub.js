'use strict';

$(document).ready(function(){
    $('#imgbtn').on('click', function(){
        $('div.fixed').toggleClass('hidden');
    });
    $('.bttn').on('click', function(){
        $('div.fixed').toggleClass('hidden');
    });
    $('#imgbtn').hover(function() {
        $('.eighty').toggleClass('hidden');
    });
});
