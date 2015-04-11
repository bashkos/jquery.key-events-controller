/**
 * Created by bashkos on 11.04.15.
 */
(function ($) {
    'use strict';

    $(window).on('keydown', function (e) {
        var key = '';

        switch (e.which) {
            case 8:
                key = 'BACKSPACE';
                break;
            case 9:
                key = 'TAB';
                break;
            case 13:
                key = 'ENTER';
                break;
            case 16:
                key = 'SHIFT';
                break;
            case 17:
                key = 'CTRL';
                break;
            case 18:
                key = 'ALT';
                break;
            case 27:
                key = 'ESC';
                break;
            case 32:
                key = 'SPACE';
                break;
            case 33:
                key = 'PAGEUP';
                break;
            case 34:
                key = 'PAGEDOWN';
                break;
            case 35:
                key = 'END';
                break;
            case 36:
                key = 'HOME';
                break;
            case 37:
                key = 'LEFT';
                break;
            case 38:
                key = 'UP';
                break;
            case 39:
                key = 'RIGHT';
                break;
            case 40:
                key = 'DOWN';
                break;
            case 45:
                key = 'INSERT';
                break;
            case 46:
                key = 'DELETE';
                break;
        }

        if (key) {
            var $target = $(e.target),
                prefix = '';

            if (e.ctrlKey && key !== 'CTRL') {
                prefix += 'CTRL_';
            }

            if (e.altKey && key !== 'ALT') {
                prefix += 'ALT_';
            }

            if (e.shiftKey && key !== 'SHIFT') {
                prefix += 'SHIFT_';
            }

            $target.trigger('keydown-' + key);

            if (prefix) {
                $target.trigger('keydown-' + prefix + key);
            }
        }
    });
})(jQuery);