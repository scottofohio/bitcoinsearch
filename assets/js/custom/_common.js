/**
 * Cement Marketing Baseline Theme Common Javascript Functions
 * 
 * @package Cement Baseline JavaScript
 * @author Cement Marketing
 * @repo https://bitbucket.org:cementmarketing/cement-baseline-theme.git
 */

/**
 * Push history state to browser and update page title
 *
 * @param variable name as string
 * @return Bool
 * @uses Cement.pageTitle()
 * @usage pushHistoryState('/new-url/');
 */
Cement.pushHistoryState = function (permalink) {
    if (history.pushState) {
        window.history.pushState(null, permalink.replace('/', ''), permalink);
        $.ajax({
            url: permalink,
            complete: function (data) {
                Cement.pageTitle(permalink);
            }
        });
    }
};

/**
 * Check if mobile 
 *
 * @param variable name as string
 * @return Bool
 * @uses Cement.pageTitle()
 * @usage pushHistoryState('/new-url/');
 */
Cement.isMobile = function() {
    return ( $(window).width() <= Cement.globals.mediumBreak );
};

Cement.getParameterByName = function(name, url) {
    if ( typeof url === 'undefined' ) {
        url = window.location.href;
    }
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    } 
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

Cement.scrollToElement = function(selector, time, overrideselector) {
    if (typeof selector === 'undefined') {
        selector = 'body';
    }
    if (typeof overrideselector === 'undefined') {
        overrideselector = 'html, body';
    }
    if (typeof time === 'undefined') {
        time = 1000;
    }
    if ($(selector).length > 0) {
        $(overrideselector).animate({
            scrollTop: $(selector).offset().top + -80
        }, time);
    }
};

Cement.addIEVersionClasses = function() {
    var ua = window.navigator.userAgent, 
        msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        $('html').addClass('ie' + (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))));
    }
    return false;
};

Cement.equalHeights = function() {
    var equalHeights = $('.equal-heights');
    windowWidth = $(window).width();
    if (windowWidth > Cement.globals.mediumBreak) {
        if (equalHeights.length > 0) {
            equalHeights.each(function() {
                var sections = $(this).find('.equal'),
                    largest_height = 0;
                sections.height('auto');
                sections.each(function() {
                    var h = $(this).height();
                    if ( largest_height < h ) {
                        largest_height = h;
                    }
                });
                sections.css('height', largest_height + 'px');
            });
        }
    } else {
        equalHeights.find('.equal').css('height', 'auto');
    }
};

/**
 * Return the first relative parent of an element
 *
 * @param child element
 * @return Object
 * @uses jQuery
 */
Cement.closestRelativeParent = function(elem) { 
    var rel = false,
        par = elem.parent();
    while (rel === false ) { 
        rel = (par.css('position') === 'relative' || par.is('body') );
        if (rel !== true) {
            par = par.parent();
        }
    }
    return par;
};

/**
 * Get page title of provided URL
 *
 * @param url
 * @return String
 */
pageTitle = function (url, update) {
    var result = "";
    update = update || false;
    $.ajax({
        url:url,
        async: false,  
        success:function(data) {
            result = data;
        }
    });
    if (update) {
        document.title = result.match(/<(title)>[\s\S]*?<\/\1>/gi)[0].replace('<title>', '').replace('</title>', '');
    }
    return result.match(/<(title)>[\s\S]*?<\/\1>/gi)[0].replace('<title>', '').replace('</title>', '');
};

/**
 * Check if variable is defined
 *
 * @param variable name as string
 * @return Bool
 * @usage isSet('varNameAsString')
 */
isSet = function (varAsStr) {
    prevItem = window;
    varSplit = varAsStr.split('.');
    x = 0;
    if (typeof (window[varSplit[0]]) !== 'undefined') {
        obj = window[varSplit[0]];
    }
    $.each(varSplit, function (i, item) {
        prevItem = prevItem[item];
        if (i === (varSplit.length - 1)) {
            if (typeof (item) !== 'undefined') {
                retVal = (typeof (prevItem) !== 'undefined');
            } else {
                retVal = false;
            }
            return retVal;
        }
    });
};
