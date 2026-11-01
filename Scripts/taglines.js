/* ==========================================================
   taglines.js  -  EXTERNAL JavaScript file (Item #7)
   Purpose: Rotates the subtitle line in the page banner so it
            cycles through different parts of who I am.
   Source:  Pattern based on the "rotate text with setInterval"
            technique from w3schools.com JS timing examples.
            (Edit this line to name the exact site/page you used.)
   Rewritten and customized with my own taglines and fade effect.
   Used by: js.htm -> <script src="scripts/taglines.js"></script>
   ========================================================== */

// My own list of taglines (customized for my site)
var taglineList = [
    "Developer \u2022 Designer \u2022 CDL Professional",
    "Heavy Towing \u2022 Recovery \u2022 Logistics",
    "3D Printing \u2022 PC Building \u2022 World Building",
    "Python \u2022 HTML \u2022 CSS \u2022 JavaScript"
];

var taglineIndex = 0;      // which tagline is showing now
var taglineDelay = 3000;   // milliseconds between changes (3 seconds)

// Swap to the next tagline with a quick fade out / fade in
function rotateTagline() {
    var el = document.getElementById("tagline");
    if (!el) { return; }           // do nothing if the page has no #tagline

    el.style.transition = "opacity 0.5s";
    el.style.opacity = 0;          // fade out

    setTimeout(function () {
        taglineIndex = (taglineIndex + 1) % taglineList.length;  // loop back to 0
        el.textContent = taglineList[taglineIndex];
        el.style.opacity = 1;      // fade in
    }, 500);
}

// Start rotating once the page has finished loading
window.addEventListener("load", function () {
    setInterval(rotateTagline, taglineDelay);
});