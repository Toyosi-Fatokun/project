const toggles = document.querySelectorAll('.faq-toggle');
 
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggles.forEach((toggle) => {
      toggle.parentNode.classList.remove('active');
    })
    toggle.parentNode.classList.toggle('active');
  })
})