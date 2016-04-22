//api key 1d745dbb6b93bf8dd2e8edc95e47a023
//?key=1d745dbb6b93bf8dd2e8edc95e47a023&q=shredded%20chicken
var container = $('#recipes');
Cement.products = function(search) {
    //Plugin Variables.
    
    var url = 'api.php/?search=' + search;
    $('.loader').show();
    $.ajax({
        url: url,
        dataType: "json",
        success: function(obj) {
            console.log(obj);
            results = obj.products;
            $('.loader').hide();
            $.each(results, function(key, val) {
                var title = val.name,
                    img = val.thumbnailURL,
                    price = val.priceUSD,
                    link = val.url;
                    output = '<li>';
                    output += '<h3>';
                    output += '<a target="_blank" href="' + link + '">' + title + '</a>'; 
                    output += '</h3>';
                    output += '<figure><img src="' + img + '" alt="'+ title +'"></figure>';
                    output += '</li>';
                    container.append(output);
            });
        }
    });
};
Cement.formSubmit = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var input = $(this).find('input').val();
        container.empty();
        Cement.products(input);
    });
};
Cement.formSubmit();