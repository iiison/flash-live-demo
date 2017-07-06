export default function getTemplate(controllerRef) {
  const viewName = controllerRef.view.get('viewName')
  const viewNameTempalteMap = {
    home() {
      return System.import('templates/home.tpl')
    },
    login() {
      return System.import('templates/login.tpl')
    }
  }

  return viewNameTempalteMap[viewName]()
}
