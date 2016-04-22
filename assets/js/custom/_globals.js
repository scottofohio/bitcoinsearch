/**
 * Global JavaScript
 * 
 * @package Cement Baseline JavaScript
 * @author Cement Marketing
 * @repo https://bitbucket.org:cementmarketing/cement-baseline-theme.git
 */

Cement.globals = Cement.globals || {};

Cement.initGlobals = function() {
    Cement.globals.themeDir = '/wp-content/themes/cement-baseline-theme';
    Cement.globals.currentPageHref = document.location.href;
    Cement.globals.mediumBreak = 669;
    Cement.globals.largeBreak = 1025;
};