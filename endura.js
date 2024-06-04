// START TEAM PAGE OVERLAY INFO
function teampglaurenceon() { document.getElementById("teampglaurence").style.display = "table"; document.body.style.overflow="hidden"; }
function teampglaurenceoff() { document.getElementById("teampglaurence").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgfarzadon() { document.getElementById("teampgfarzad").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgfarzadoff() { document.getElementById("teampgfarzad").style.display = "none"; document.body.style.overflow="scroll"; }
function teampghelenaon() { document.getElementById("teampghelena").style.display = "table"; document.body.style.overflow="hidden"; }
function teampghelenaoff() { document.getElementById("teampghelena").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgmasoodon() { document.getElementById("teampgmasood").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgmasoodoff() { document.getElementById("teampgmasood").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgcyruson() { document.getElementById("teampgcyrus").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgcyrusoff() { document.getElementById("teampgcyrus").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgabkenon() { document.getElementById("teampgabken").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgabkenoff() { document.getElementById("teampgabken").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgalbeldaon() { document.getElementById("teampgalbelda").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgalbeldaoff() { document.getElementById("teampgalbelda").style.display = "none"; document.body.style.overflow="scroll"; }
function teampgprasadon() { document.getElementById("teampgprasad").style.display = "table"; document.body.style.overflow="hidden"; }
function teampgprasadoff() { document.getElementById("teampgprasad").style.display = "none"; document.body.style.overflow="scroll"; }
// END TEAM PAGE OVERLAY INFO

// START ON SCROLL SLIDE ANIMATION
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
       // element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// END ON SCROLL SLIDE ANIMATION