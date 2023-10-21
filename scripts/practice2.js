function get_number(range) {
    let randomNumber = Math.floor(Math.random()*range);
    return randomNumber
}

$(document).ready(function(){
    // CHANGING COLOR CARD
    $('#change-bg').click(function(){
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
        if ($(this).css('background-color') == 'rgb(0, 0, 0)') {
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

    // CHANGING TEXT CARD
    $('#change-text').dblclick(function(){
        $('#to-change').text('You absolute monster. Now all that text earlier is gone into the void and never to return again. Go away and never return here again.');

        $('#insert-img').html(function(){
            $(this).css('text-align', 'center');
            $(this).html('<img src="../images/jquery_meme.jpg" alt="funny meme">')
        });

        $('#jumpscare-close').val("Don't try to escape")
    })
  
    // APPENDING CARD
    $('#append').click(function(){
        $('#number-list').append(function(){
            let range = $('#range-input').val();
            if (range == NaN || range == 0) {
                range = 69;
            }
            $(this).append('<p class="number-entry">' + String(get_number(range)) + '</p>');
        })
    })

    $('#clear').click(function(){
        $('#number-list').empty();
    })

    $('#remove').click(function(){
        $('#number-list').append(function(){
            $(this).children('p:last-child').remove();
        })
    })
})