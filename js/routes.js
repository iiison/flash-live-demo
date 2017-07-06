import page from 'page'

export default function initRoutes(controller) {
  if (controller) {
    const routes = {
      home() {
        controller.view.set('viewName', 'home')
      },
      login() {
        controller.view.set('viewName', 'login')
      }
    }

    page('/', routes.home)
    page('/login', routes.login)
    page()
  }
}
