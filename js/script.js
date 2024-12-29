
  const progressBar = document.querySelector('.progress');
  
  progressBar.addEventListener('animationend', () => {
      progressBar.style.display = 'none';
  });
