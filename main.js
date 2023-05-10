const logo = document.getElementById("img1");
const animated = document.getElementById("animated");

function show() {
  out(logo);

  dynamics.setTimeout(outAnimate, 2000);
  dynamics.setTimeout(enter, 2100);
}

function enter(el = logo) {
  dynamics.animate(el, {
    opacity: 1,
  });
}

function out(el) {
  el.style.opacity = "0";
}

function outAnimate(el = animated) {
  dynamics.animate(el, {
    opacity: 0,
  });
}

show();
