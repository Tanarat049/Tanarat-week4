import { HomePage } from './pages/home.js'
import { AdminPage } from './pages/admin.js'

const rontes = {
  '/':HomePage,
  '/admin' : AdminPage, 

}

function render() {
  const path = location.hash.slice(1) || '/'
  const page = rontes[path] || HomePage
  document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render()