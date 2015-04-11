$(function () {
    'use strict';

    var $tracked = $('.j-tracked'),
        $result = $('.j-result');

    $tracked.on('keydown-BACKSPACE', function () {
        var $item = $('<li/>').text('Нажата клавиша BACKSPACE');
        $result.append($item);
    });

    $tracked.on('keydown-TAB', function () {
        var $item = $('<li/>').text('Нажата клавиша TAB');
        $result.append($item);
    });

    $tracked.on('keydown-SHIFT keydown-CTRL keydown-ALT', function () {
        var $item = $('<li/>').text('Нажата клавиша SHIFT, CTRL или ALT');
        $result.append($item);
    });

    $tracked.on('keydown-LEFT', function () {
        var $item = $('<li/>').text('Нажата стрелка влево');
        $result.append($item);
    });

    $tracked.on('keydown-UP', function () {
        var $item = $('<li/>').text('Нажата стрелка вверх');
        $result.append($item);
    });

    $tracked.on('keydown-RIGHT', function () {
        var $item = $('<li/>').text('Нажата стрелка вправо');
        $result.append($item);
    });

    $tracked.on('keydown-DOWN', function () {
        var $item = $('<li/>').text('Нажата стрелка вниз');
        $result.append($item);
    });

    $tracked.on('keydown-CTRL_RIGHT', function () {
        var $item = $('<li/>').text('Нажато сочетание клавиш CTRL + стрелка вправо');
        $result.append($item);
    });

    $tracked.on('keydown-ESC', function () {
        var $item = $('<li/>').text('Нажата клавиша ESC');
        $result.append($item);
    });

    $tracked.on('keydown-SPACE', function () {
        var $item = $('<li/>').text('Нажата клавиша пробел');
        $result.append($item);
    });

    $tracked.on('keydown-INSERT', function () {
        var $item = $('<li/>').text('Нажата клавиша INSERT');
        $result.append($item);
    });

    $tracked.on('keydown-DELETE', function () {
        var $item = $('<li/>').text('Нажата клавиша DELETE');
        $result.append($item);
    });

    $tracked.on('keydown-HOME', function () {
        var $item = $('<li/>').text('Нажата клавиша HOME');
        $result.append($item);
    });

    $tracked.on('keydown-END', function () {
        var $item = $('<li/>').text('Нажата клавиша END');
        $result.append($item);
    });

    $tracked.on('keydown-ENTER', function () {
        var $item = $('<li/>').text('Нажата клавиша ENTER');
        $result.append($item);
    });

    $tracked.on('keydown-CTRL_ENTER', function () {
        var $item = $('<li/>').text('Нажато сочетание клавиш CTRL + ENTER');
        $result.append($item);
    });
});
