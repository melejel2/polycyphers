document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");
    var btn = document.getElementById('clear-history-btn');
    if (btn) {
        console.log("Button found and script running.");
        btn.onclick = function() {
            console.log("Button clicked!");  // Log when button is clicked
            window.history.pushState({}, '', window.location.pathname);
            window.location.reload();
        };
    } else {
        console.log("Clear history button not found.");
    }
});
