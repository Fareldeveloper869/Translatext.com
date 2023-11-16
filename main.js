const modal = document.querySelector('.board')
const btnBox = document.querySelector('.ui-top')
const closeBtn = document.querySelector('.exit')
const showModal = document.querySelectorAll('.show-modal')
const overlay = document.querySelector('.screen')

const openModal = function(e) {
  if (e.target = showModal) {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }
}
const closeModal = function() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnBox.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
