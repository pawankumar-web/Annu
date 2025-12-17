
(function () {

  // Disable Right Click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable Key Shortcuts
  document.addEventListener('keydown', function (e) {

    // Ctrl + U
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
      e.preventDefault();
    }

    // Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && 
       ['i','j','c'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });

  // Detect DevTools (Basic)
  setInterval(function () {
    if (
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > 160
    ) {
      document.body.innerHTML = 
        "<h2 style='text-align:center;margin-top:20%'>Inspect Disabled 🚫</h2>";
    }
  }, 1000);

})();

