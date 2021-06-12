import Navigo from 'navigo'
import App from './App.svelte'

const navigo: Navigo = new Navigo(`/`)

navigo.on(`/login`, () => {
  debugger
})

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
