document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-js-header]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add('header--visible')
        }
      })
    },
    { threshold: 0.1 },
  )
  observer.observe(document.querySelector('.welcome'))
})
