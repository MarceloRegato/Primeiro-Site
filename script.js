const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



/* btn2 */



const openModalbButtons = document.querySelectorAll('[data-modal-target]')
const closeModalbButtons = document.querySelectorAll('[data-close-button]')
const overlayb = document.getElementById('overlay')

openModalbButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayb.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modalb.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalbButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modalb')
    closeModal(modal)
  })
})



/* btn3 */



const openModalcButtons = document.querySelectorAll('[data-modal-target]')
const closeModalcButtons = document.querySelectorAll('[data-close-button]')
const overlayc = document.getElementById('overlay')

openModalcButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayc.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modalc.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalcButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modalc')
    closeModal(modal)
  })
})



/* btn4 */



const openModaldButtons = document.querySelectorAll('[data-modal-target]')
const closeModaldButtons = document.querySelectorAll('[data-close-button]')
const overlayd = document.getElementById('overlay')

openModaldButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayd.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modald.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModaldButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modald')
    closeModal(modal)
  })
})
