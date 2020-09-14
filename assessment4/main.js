/**
 * Write your solutions here
 */
$(document).ready(function () {
    // Solution #1
    $('#change-bg-color').click(function () {
        $('body').css('background-color', 'blue')
    })

    //Solution #2
    $('.btn').eq(0).click(function () {
        $('.btn').eq(0).css('background-color', '#93f2e5')
    })
    $('.btn').eq(1).click(function () {
        $('.btn').eq(1).css('background-color', '#93f2e5')
    })
    $('.btn').eq(2).click(function () {
        $('.btn').eq(2).css('background-color', '#93f2e5')
    })

    // Solution #3
    $('#reset-btn').click(function () {
        // $('body').removeAttr('style')
        // $('.btn').removeAttr('style')
        location.reload()
    })

    // Solution #4
    $('i').eq(0).hover(
        function () {
            $('#review-result').html(1)
        },
        function () {
            $('#review-result').html('')
        })
    $('i').eq(1).hover(
        function () {
            $('#review-result').html(2)
        },
        function () {
            $('#review-result').html('')
        })
    $('i').eq(2).hover(
        function () {
            $('#review-result').html(3)
        },
        function () {
            $('#review-result').html('')
        })

    // Solution #5
    $('#go-to-btn').click(function () {
        var str = $('#custom-url').val()
        console.log(str)
        window.location.replace(str)
    })

    // Solution #6
    $('#append-to-ul').click(function () {
        $('#append-to-me').append('<li>text</li>')
    })

    // Solution #7
    $('#message').delay(2000).fadeIn('slow', function () {
        $('#message').html('Goodbye, World!')
    })

    // Solution #8
    $('#hl-toggle>li').eq(0).click(function () {
        $('#hl-toggle>li').eq(0).toggleClass('highlight')
    })
    $('#hl-toggle>li').eq(1).click(function () {
        $('#hl-toggle>li').eq(1).toggleClass('highlight')
    })
    $('#hl-toggle>li').eq(2).click(function () {
        $('#hl-toggle>li').eq(2).toggleClass('highlight')
    })
    $('#hl-toggle>li').eq(3).click(function () {
        $('#hl-toggle>li').eq(3).toggleClass('highlight')
    })

    // Solution #9
    $('#upcase-name').click(function () {
        var str = $('#input').val().toUpperCase()
        $('#output').html('Your name uppercased is: ' + str)
    })

    // Solution #10
    $('#font-grow').children('li').eq(0).dblclick(function() {
        var originalSize = $('#font-grow').children('li').eq(0).css('font-size');
        var newSize = parseFloat(originalSize)*2;
        $('#font-grow').children('li').eq(0).css('fontSize', newSize)
    })
    $('#font-grow').children('li').eq(1).dblclick(function() {
        var originalSize = $('#font-grow').children('li').eq(1).css('font-size');
        var newSize = parseFloat(originalSize)*2;
        $('#font-grow').children('li').eq(1).css('fontSize', newSize)
    })
    $('#font-grow').children('li').eq(2).dblclick(function() {
        var originalSize = $('#font-grow').children('li').eq(2).css('font-size');
        var newSize = parseFloat(originalSize)*2;
        $('#font-grow').children('li').eq(2).css('fontSize', newSize)
    })
})


