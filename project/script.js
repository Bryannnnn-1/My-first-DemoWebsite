

function toggleMenu(button) {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
  button.classList.toggle('open');
}


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const currentlyActive = document.querySelector('.faq-question.active');
      if (currentlyActive && currentlyActive !== button) {
          currentlyActive.classList.remove('active');
          currentlyActive.nextElementSibling.style.display = 'none';
          currentlyActive.nextElementSibling.style.opacity = '0';
          currentlyActive.nextElementSibling.style.maxHeight = '0';
      }
      button.classList.toggle('active');
      const answer = button.nextElementSibling;
      if (button.classList.contains('active')) {
          answer.style.display = 'block';
          setTimeout(() => {
              answer.style.opacity = '1';
              answer.style.maxHeight = '200px';
          }, 10);
      } else {
          answer.style.opacity = '0';
          answer.style.maxHeight = '0';
          setTimeout(() => {
              answer.style.display = 'none';
          }, 300);
      }
  });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
  setTimeout(showSlides, 4000);
}

// News slideshow
let newsSlideIndex = 1;
showNewsSlides(newsSlideIndex);

function plusSlides(n) {
  showNewsSlides(newsSlideIndex += n);
}

function showNewsSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
      newsSlideIndex = 1;
  }
  if (n < 1) {
      newsSlideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[newsSlideIndex - 1].style.display = "block";
}
