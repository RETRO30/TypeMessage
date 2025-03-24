const modal = document.getElementById('auth-modal')
const openModalBtn = document.getElementById('open-modal')
const closeModalBtn = document.getElementById('close-modal')
const toggleModeLink = document.getElementById('toggle-mode')
const modalTitle = document.getElementById('modal-title')
const usernameField = document.getElementById('username-field')
const submitBtn = document.getElementById('submit-btn')
const authForm = document.getElementById('auth-form')

const welcomeScreen = document.getElementById('welcome-screen')
const app = document.getElementById('app')

let isLoginMode = true

// Открытие модалки
openModalBtn.onclick = () => {
  modal.classList.remove('hidden')
  setMode(true)
}

// Закрытие модалки
closeModalBtn.onclick = () => {
  modal.classList.add('hidden')
}

// Клик вне формы
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden')
  }
}

// Переключение между режимами
toggleModeLink.onclick = (e) => {
  e.preventDefault()
  setMode(!isLoginMode)
}

function setMode(isLogin) {
  isLoginMode = isLogin
  modalTitle.textContent = isLogin ? 'Login' : 'Register'
  submitBtn.textContent = isLogin ? 'Login' : 'Register'
  toggleModeLink.textContent = isLogin ? 'Register' : 'Login'
  usernameField.classList.toggle('hidden', isLogin)
}

// Обработка формы
authForm.onsubmit = (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const username = document.getElementById('username').value

  console.log('Submitting:', { email, password, username, isLoginMode })

  // Здесь позже будет реальный fetch на backend

  // Имитация успешного входа
  modal.classList.add('hidden')
  welcomeScreen.classList.add('hidden')
  app.classList.remove('hidden')
}
