        var slide_index = 1;
        displaySlides(slide_index);
        function nextSlide(n) {
            displaySlides(slide_index += n);
        }
        function currentSlide(n) {
            displaySlides(slide_index = n);
        }
        function displaySlides(n) {
            var i;
            var slides = document.getElementsByClassName("showSlide");
            if (n > slides.length) { slide_index = 1 }
            if (n < 1) { slide_index = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slide_index - 1].style.display = "block";
        }
        let cardIndex = 1;
        showCard(cardIndex);
    
        // Function to navigate to the next or previous card
        function nextCard(n) {
            showCard((cardIndex += n));
        }
    
        // Function to show a specific card
        function currentCard(n) {
            showCard((cardIndex = n));
        }
    
        // Function to handle automatic card slideshow
        function autoCard() {
            nextCard(1);
        }
    
        // Set a timer to automatically advance cards every 5 seconds (adjust as needed)
        setInterval(autoCard, 5500);
    
        // Function to display the current card
        function showCard(n) {
            let cards = document.getElementsByClassName('testimonials-card');
            let circles = document.getElementsByClassName('circle');
    
            if (n > cards.length) {
                cardIndex = 1;
            }
            if (n < 1) {
                cardIndex = cards.length;
            }
    
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = 'none';
            }
    
            for (let i = 0; i < circles.length; i++) {
                circles[i].classList.remove('active');
            }
    
            cards[cardIndex - 1].style.display = 'block';
            circles[cardIndex - 1].classList.add('active');
        }
        let currentSection = 0;
        const sections = document.querySelectorAll('.testimonial-section');
        const dots = document.querySelectorAll('.dot');
      
        function showSection(index) {
          sections.forEach((section, i) => {
            section.style.transform = `translateX(${(i - index) * 100}%)`;
          });
      
          dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
          });
      
          currentSection = index;
        }
      
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => showSection(index));
        });
      
        // Auto-advance to the next section every 5 seconds
        setInterval(() => {
          const nextSection = (currentSection + 1) % sections.length;
          showSection(nextSection);
        }, 5500);
        
        