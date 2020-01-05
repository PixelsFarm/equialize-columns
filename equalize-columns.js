// Igualar items llistat testimonis sinodo

jQuery(function() {
    (function($) {

        trace('equalize-height-book-testimonial.js')

        var $w = $(window)
        var ww = $w.width()
        var $b = $('.b-group-book-testimonials')
        var $itm = !('ontouchstart'in document.documentElement) || ww > 992 ? $b.find('.field-name-field-related-testimonials > .field-items > .field-item') : $b.find('.owl-item > .field-item')
        //var $itm = $b.find('.field-name-field-related-testimonials > .field-items > .field-item')
        var arr = []

        if (!$b.length)
            return

        __equalize()

        $w.resize(function(e) {
            __reset()
            __equalize()
        })

        function __equalize() {

            $itm.each(function(i, o) {
                var $o = $(o)
                arr.push($o.outerHeight(true))
            })

            $itm.css('height', Math.max.apply(Math, arr))
        }

        function __reset() {
            arr = []
            $itm.css('height', '')
        }

        function trace(str) {
            console.log ? console.log(str) : null
        }

    }
    )(jQuery);
});