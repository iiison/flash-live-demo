import Base from '$lib/Base'
import Model from '$js/Model'
import View from '$js/View'
import initRoutes from '$js/routes'
import getTemplate from '$js/utils/getTemplates'


class Controller extends Base {
  constructor() {
    super()

    this.view = new View()
    this.model = new Model()

    this.view.on('change:viewName', (viewName) => {
      getTemplate(this)
        .then((tempalte) => {
          this.view.render({
            tpl : tempalte
          })
        })
    })
  }
}

const controller = new Controller()
initRoutes(controller)

export default controller
