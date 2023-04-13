//ảnh tự chuyển theo time
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let timer = null;

    function showSlides() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    showSlides();

    const sliderWrapper = document.querySelector('.slider-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - sliderWrapper.offsetLeft;
        scrollLeft = sliderWrapper.scrollLeft;
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        isDown = false;
    });

    sliderWrapper.addEventListener('mouseup', () => {
        isDown = false;
    });

    sliderWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderWrapper.offsetLeft;
        const walk = (x - startX) * 3;
        sliderWrapper.scrollLeft = scrollLeft - walk;
    });   
});

//Nhấn vào nút chuyển ảnh
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider img');
    const controls = document.querySelectorAll('.slider-controls input[type="radio"]');
  
    let slideIndex = 0;
    let timer = null;
  
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        updateActiveControl(index);
        startTimer();
    }

    function updateActiveControl(index) {
        const controls = document.querySelectorAll('.slider-controls input[type="radio"]');
        for (let i = 0; i < controls.length; i++) {
          controls[i].checked = false;
        }
        controls[index].checked = true;
    }
  
    function showNextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        showSlide(slideIndex);
        updateActiveControl(slideIndex);
    }
  
    function startTimer() { 
        clearTimeout(timer);
        timer = setTimeout(showNextSlide, 3000);
    }
  
    function stopTimer() {
        clearTimeout(timer);
    }
  
    function handleControlClick(event) {
        const value = event.target.value;
        slideIndex = parseInt(value) - 1;
        showSlide(slideIndex);
        stopTimer();
    }
  
    showSlide(slideIndex);
    startTimer();
  
    for (let i = 0; i < controls.length; i++) {
        controls[i].addEventListener('click', handleControlClick);
    }
    
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseover', stopTimer);
    sliderWrapper.addEventListener('mouseleave', startTimer);
});
  
  //Java thanh header dính lên top và khi kéo xuống mất khi kéo lên thì hiện lại
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").classList.remove("hidden");
  } else {
      document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
  }   