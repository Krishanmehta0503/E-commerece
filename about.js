// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        const count = +counter.innerText.replace(/[^0-9]/g, "");
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  // Run animation only when counters come into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect(); // run only once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
