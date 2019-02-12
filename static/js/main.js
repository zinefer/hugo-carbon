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

function replyTo(parent, name) {
  var e = document.getElementById(parent),
      f = document.getElementById('comment-form'),
      h = document.getElementById('comment-form-header');

  h.innerHTML = 'Reply to ' + name;
  e.parentNode.insertBefore(f, e.nextSibling);
  document.getElementsByName('fields[reply_to]')[0].value=parent;
}

// Just a little less animation ...
if(document.referrer && (document.referrer.split('/')[2]).split(':')[0] == location.hostname){
  var x = document.getElementById("portrait");
  x = x.className = "frame";
}