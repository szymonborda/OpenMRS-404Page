$(document).ready(function () {
    var colors = ['#f26522', '#009384', '#eea616', '#5b57a6'];
    $('.question-marks__element').each(function () {
        $(this).css({
            'transform': 'rotate(' + Math.floor(Math.random() * 360) + 'deg)',
            'left': Math.floor((Math.random() * 100) + 1) + '%',
            'color': colors[Math.floor(Math.random() * 4)]
        });
    });
});
