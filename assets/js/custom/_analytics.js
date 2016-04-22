/**
 * Cement Marketing Baseline Theme Analytics-Related Javascript Functions
 * 
 * @package Cement Baseline JavaScript
 * @author Cement Marketing
 * @repo https://bitbucket.org:cementmarketing/cement-baseline-theme.git
 */

/**
 * Manually set & push analytics tracking info to Google
 *
 * @param child element
 * @uses ga (Google Analytics), pageTitle()
 */
Cement.analyticsTrack = function(path, title) {
    var docTitle = title || pageTitle(path);
    ga('set', { page: path, title: docTitle });
    ga('send', 'pageview');
    if ( document.location.hash === "#test" ) {
        console.log('tracked: ' + path + ' ~ ' + docTitle);
    }
};
