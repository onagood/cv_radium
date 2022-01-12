const text = document.querySelector('.text')
text.addEventListener('click', function(e) {
  e.target.classList.toggle('text_hidden')
})

const container = document.querySelector('.container')
window.addEventListener('keydown', function(e) {
  if (e.code == 'Space') {
    container.removeChild(text)
  }
})