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

// Just a little less animation ...
if((document.referrer.split('/')[2]).split(':')[0] == location.hostname){
  var x = document.getElementById("portrait");
  x = x.className = "frame";
}