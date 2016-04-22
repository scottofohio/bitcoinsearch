/**
 * Filter related JS functions and methods 
 * 
 * @package Cement Baseline JavaScript
 * @author Cement Marketing
 * @repo https://bitbucket.org:cementmarketing/cement-baseline-theme.git
 */
 
$ = jQuery;

var Cement = Cement || {};
Cement.Filters = Cement.Filters || {};

Cement.Filters.initiateTextSearchFilter = function(inputSelector, searchItemsSelector) {
    $(inputSelector).on('keyup kepress', function(event) {
        var searchText = $(this).val().toLowerCase();
        if (searchText !== '') {
            $(searchItemsSelector).filter(":not(:Contains(" + searchText +
                "))").hide();
            $(searchItemsSelector).filter(":Contains(" + searchText + ")").show();
        } else {
            $(searchItemsSelector).show();
        }
      });
};