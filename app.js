/*=======| Open menu |======= */

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.querySelector("#itens").style.transition = "none";
    document.querySelector("#itens").style.display = "block";
  } else {
    document.querySelector("#itens").style.transition = "all 0.5s ease-in-out";
    document.querySelector("#itens").style.display = "none";
  }
});

function openMenu() {
  const menu = document.querySelector("#itens");
  if (menu.style.display === "block") {
    menu.style.height = "0";
    setTimeout(function() {
      menu.style.display = "none";
    }, 500);
  } else {
    menu.style.display = "block";
    setTimeout(function() {
      menu.style.height = "auto";
    }, 0);
  }
}


/* =======| Smooth scroll |=======  */

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var links = document.querySelectorAll('a[href^="#"]');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    smoothScroll(targetId, 1000);
  });
});
