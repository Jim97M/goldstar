( function( $ ) {

/* Hides notification bar if the referrer is mojomarketplace.com */
function hideNavBar() {

  //URL to target
  var targetUrl = 'mojomarketplace.com';

  //Referrer
  var theReferrer = document.referrer;
  //Footer URL to Remove
  var footerUrl = 'organicthemes.com';
  var footerUrlException = 'organicthemes.com/demo';

  if ( theReferrer.indexOf(targetUrl) !== -1 || getCookie('organic_referrer_target') == 1 ) {

    //Set cookie if referrer is target
    createCookie( 'organic_referrer_target', 1, 1 );

    //Hide any Organic Themes links in footer-content
    var footerLinks = $('.footer-content').find('a');
    for (var i=0; i < footerLinks.length; i++) {
      if ( footerLinks[i].href.indexOf(footerUrl) !== -1 && footerLinks[i].href.indexOf(footerUrlException) == -1 ) {
        footerLinks[i].style.display = "none";
      }
    }

    //Hide any Organic Themes links in footer-information
    var footerLinks2 = $('.footer-information').find('a');
    for (var i=0; i < footerLinks2.length; i++) {
      if ( footerLinks2[i].href.indexOf(footerUrl) !== -1 && footerLinks2[i].href.indexOf(footerUrlException) == -1 ) {
        footerLinks2[i].style.display = "none";
      }
    }

    //Hide any Buy links in menus
    var buyLinks = $('li.menu-item');
    $(buyLinks).each(function(){
      if ( $(this).find('a').html().toLowerCase().indexOf('buy') !== -1 ) {
        $(this).hide();
      }
    });

  }

}

// Get Cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// Create Cookie
function createCookie(name,value,hours) {
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

// Remove Cookie
function eraseCookie(name) {
    createCookie(name,"",-1);
}


$(document).ready(hideNavBar);

})( jQuery );
