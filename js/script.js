$(function() {

    $(window).on('scroll.alert', function() {
        var promo_pos = $('#special-price').find('h2').offset().top-$(window).scrollTop();
        if(promo_pos <=30) {
            $(window).off('scroll');

            setTimeout(function () {
                $('#loader').hide();
                countdown();
            }, 2000);
        }
    });

});

var countdown = function() {
    $("#promo-block").fadeIn('fast', function() {
        $(".countdown").countdown({
            until: 900,
            format: 'ms',
            layout: '{mnn}{sep}{snn}',
            onExpiry: expiry
        });
    });
};

var expiry = function() {
    $("#promo-block").remove();
    $("#full-price").show();
    $(".purchase-link").each(function() {
        var href = $(this).attr("href");
        var new_href;
        if(gfunnel) {
            new_href = href.replace(/\uyhfg/g, 'uyhfg50');
        }
        else {
            new_href = href.replace(/\UYHF1/g, 'UYHF3');
        }

        $(this).attr('href', new_href);
    });
    $('img.price-comparison').hide();
    $(".regular-price").show();
};

var purchase_links = $('a.purchase-link');


var addVtid = function(element, vtid) {
    element.each(function () {
        var href = $(this).attr("href") + '&vtid=' + vtid + '&_vtid=' + vtid;
        $(this).attr("href", href);
    });
};

var setLink = function(element, link) {
    element.each(function () {
        $(this).attr("href", link);
    });
};

var variations = [];