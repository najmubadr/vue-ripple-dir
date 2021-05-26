export default {
  created(el, bindings) {

    el.addEventListener("click", function(evt) {
      let target = evt.currentTarget;
      let x = evt.clientX - target.offsetLeft;
      let y = evt.clientY - target.offsetTop;

      let duration;
      if (bindings.value.duration) {
        duration = bindings.value.duration * 1;
      } else {
        duration = 1000;
      }

      let animationFrame, animationStart;

      let animationStep = function(timestamp) {
        if (!animationStart) {
          animationStart = timestamp;
        }

        let frame = timestamp - animationStart;
        if (frame < duration) {
          let easing = (frame / duration) * (2 - (frame / duration));

          let circle = "circle at " + x + "px " + y + "px";
          let color = "rgba(0, 0, 0, " + (0.5 * (1 - easing)) + ")";
          if (bindings.value.color == 'invert') {
            color = "rgba(255, 255, 255, " + (0.5 * (1 - easing)) + ")";
          }
          let stop = 90 * easing + "%";

          target.style.cssText = `background-image: radial-gradient(${circle}, ${color} ${stop}, transparent ${stop})`;

          animationFrame = window.requestAnimationFrame(animationStep);

        } else {
          target.style.cssText = `background-image: none`;
          window.cancelAnimationFrame(animationFrame);
        }
      }

      animationFrame = window.requestAnimationFrame(animationStep);
    });

  }
}