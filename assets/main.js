(function(){
  /* Set up the ui, which allows to display if the debug cookie is set or not, and to set it on or off
  Void -> Void */

  /* Parameters */
  var domain = 'localhost';

  /* Some references to UI elements */
  var main = document.getElementById('main');
  var status = document.getElementById('status');
  var button = document.getElementById('button');
  var button = document.getElementById("button");

  function set_as_active () {
    /* set the UI to reflect the cookie presence
    Void -> Void */
    status.innerHTML = 'debug mode active';
    button.innerHTML = 'remove cookie';
    main.setAttribute('data-state', 'active');
  }

  function set_as_inactive () {
    /* set the UI to reflect the cookie absence
    Void -> Void */
    status.innerHTML = 'debug mode inactive';
    button.innerHTML = 'add cookie';
    main.setAttribute('data-state', 'inactive');
  }

  function set_ui(){
    /* Set the UI at startup */
    if (docCookies.hasItem('debug')){
      set_as_active();
    } else {
      set_as_inactive();
    }
  }

  /* function binded to the button click */
  function click() {
    /* Add/Remove the debug cookie and modify the UI accordingly
    Void -> Void */
    if (docCookies.hasItem('debug')){
      docCookies.removeItem('debug');
      set_as_inactive();
    } else {
      docCookies.setItem('debug', true, domain);
      set_as_active();
    }
  }

  // set the UI
  set_ui();

  // add an event listener on the button
  button.addEventListener('click', click, false);
})();
