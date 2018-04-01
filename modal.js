function initModals() {
  $('#region-footer-modal .block-inner')
    .prepend('<span class="close">&times;</span>');

  $('.btns .btn-call-order').click(function () {
    modalOpen('block-webform-client-block-919');
  });

}

function modalOpen(target, info) {
  var offset = $(document).scrollTop();
  if (target !== undefined) {
    var t = $('#' + target);
    t.addClass('modal active');
    t.find('.close').click(function(){
      modalClose(target, offset);
    });
  }
}

function modalClose(target, offset = false) {
  if (target !== undefined) {
    var t = $('#' + target);
    t.removeClass('active');
    setTimeout(
      function(){
        t.removeClass('modal');
      }, 400
    );
    if (offset !== false && offset !== $(document).scrollTop()) {
      $(document).scrollTop(offset);
    }
  }
}

