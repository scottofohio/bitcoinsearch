/**
 * Keypress JavaScript Events
 *
 * @package Cement Baseline JavaScript
 * @author Cement Marketing
 * @repo https://bitbucket.org:cementmarketing/cement-baseline-theme.git
 */

Cement.IsProperCharacter = function(keypressed) {
    if (/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(keypressed.keyCode))) {
        return true;
    } else {
        return false;
    }
};

Cement.KeypressEvents = function() {

    $(document).keyup(function(e) {
        // Escape key
        if (e.keyCode == 27) {}
        // Enter/Return Key
        else if (e.keyCode == 13) {}
        // Up/Down Keys
        else if (e.which == 40 || e.which == 9 || e.which == 38) {}
    });

};