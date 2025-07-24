const counters = document.querySelectorAll('.counter');
  const speed = 100;

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const step = target / speed;

    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    };
    update();
  }

  function checkCounters() {
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && counter.innerText === '0') {
        animateCounter(counter);
      }
    });
  }

  window.addEventListener('scroll', checkCounters);
  window.addEventListener('load', checkCounters);