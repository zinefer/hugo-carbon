$( document ).ready(function() {
  $('.image-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });
});

function openMenu() {
  var x = document.getElementById("topbar");
  if (x.className === "closed") {
    x.className = "open";
  } else {
    x.className = "closed";
  }
}