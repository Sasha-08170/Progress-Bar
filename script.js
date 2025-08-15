function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / docHeight) * 100;
  const scrollContent = document.querySelector('.scroll-content');
  scrollContent.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);
