(function($) {

    $(function() {

    	initDropdowns();

});
    function initDropdowns() {
    let all = $('.dropdown');
    let dropdown = $('.dropdown-body');

    dropdown.on('click', function(){
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        }
        else {
            all.removeClass('active');
            $(this).parent().addClass('active');
        }
    });
}

})(jQuery);