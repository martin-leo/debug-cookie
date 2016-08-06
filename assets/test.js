(function(){
  /* Allows to show all the debug element in debug mode
  Void -> Void */
  function show () {
    /* Set the aria-visible to true for all the data-debug elements
    Void -> Void */

    // get a nodeList of all the element
    // with the data-debug attribute
    var debug_elements = document.querySelectorAll('[data-debug]');

    // for each, change the aria-visible attribute to true
    for (var i = 0; i < debug_elements.length; ++i) {
      var item = debug_elements[i];
      item.setAttribute('aria-visible', true);
    }
  }

  // test if the debug cookie is set
  if (docCookies.hasItem('debug')){
    // show all the data-debug elements if it is the case
    show();
  }
})();
