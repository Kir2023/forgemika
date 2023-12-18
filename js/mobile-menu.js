!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      function (e) {
        for (
          var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var mobileButtons = document.querySelectorAll('.js-open-mobile'),
    overlayMobile = document.querySelector('.js-overlay-mobile'),
    closeButtons = document.querySelectorAll('.data-mobile-close');

  mobileButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var mobileId = this.getAttribute('data-mobile'),
        mobileElem = document.querySelector('.mobile-menu[data-mobile="' + mobileId + '"]');

      mobileElem.classList.add('active');
      overlayMobile.classList.add('active');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentMobile = this.closest('.mobile-menu');

      parentMobile.classList.remove('active');
      overlayMobile.classList.remove('active');
    });
  });

  overlayMobile.addEventListener('click', function () {
    document.querySelector('.mobile-menu.active').classList.remove('active');
    this.classList.remove('active');
  });
});
