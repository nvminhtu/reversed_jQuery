$(document).ready(function() {
  //  $('.test-popup-link').magnificPopup({
  //   type: 'image'
  //   // other options
  // });

  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  });
});