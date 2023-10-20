$(document).ready(function(){
    $('#change-bg').click(function(){
        console.log($(this).css('background-color'))
        if ($(this).css('background-color') == 'rgb(255, 255, 255)'){
            $('#bg-changing-card').css({
                'background-color': 'white',
                'border-style': 'solid'
            });
            $(this).css({
                'color': 'white',
                'background-color': 'black'
            });
            $('#spooky-text').css('color', 'black')
        }
        else {
            $('#bg-changing-card').css({
                'background-color': 'black',
                'border-style': 'none'
            });
            $(this).css({
                'color': 'black',
                'background-color': 'white'
            });
            $('#spooky-text').css('color', 'white')
        }
    })

    $('#spooky-text').dblclick(function(){
        $('#main').css('display', 'none');
        $('#jumpscare').css('display', 'block');
        $('body').css('background-color', 'black');
    })

    $('#jumpscare-close').click(function(){
        $('#main').css('display', 'block');
        $('#jumpscare').css('display', 'none');
        $('body').css('background-color', 'white');
    })

    $('#bg-changing-card').mouseenter(function(){
        console.log($(this).css('background-color'))
        if ($(this).css('background-color') == 'rgb(0, 0, 0)') {
            console.log('yes');
            $('#spooky-text').css('color', 'white');
        }
        else {
            $('#spooky-text').css('color', 'black');
        }
    });

    $('#bg-changing-card').mouseleave(function(){
        if ($(this).css('background-color') == 'rgb(0, 0, 0)') {
            $('#spooky-text').css('color', 'black');
        }
        else {
            $('#spooky-text').css('color', 'white');
        }
    })
})