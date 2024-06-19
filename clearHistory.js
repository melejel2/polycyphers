window.onload = function() {
  var btn = document.getElementById('clear-history-btn');
  if(btn) {
      btn.onclick = function() {
          console.log("Button clicked!");
          window.history.pushState({}, '', window.location.pathname);
          window.location.reload();
      };
  } else {
      console.log("Clear history button not found.");
  }
};
