// Auto-sliding gallery
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  const totalSlides = slides.length;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  };

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Manual controls
  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  // Initialize
  showSlide(currentIndex);
});

// Teacher gallery slider
const teacherSlides = document.querySelectorAll('.teacher-slide');
let teacherIndex = 0;

function showTeacherSlide(index) {
  teacherSlides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Manual controls
document.getElementById('teacher-prev').addEventListener('click', () => {
  teacherIndex = (teacherIndex - 1 + teacherSlides.length) % teacherSlides.length;
  showTeacherSlide(teacherIndex);
});

document.getElementById('teacher-next').addEventListener('click', () => {
  teacherIndex = (teacherIndex + 1) % teacherSlides.length;
  showTeacherSlide(teacherIndex);
}); 

// Auto-slide every 4 seconds
setInterval(() => {
  teacherIndex = (teacherIndex + 1) % teacherSlides.length;
  showTeacherSlide(teacherIndex);
}, 4000);

// Initialize
showTeacherSlide(teacherIndex);
