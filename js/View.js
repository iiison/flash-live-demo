import Base from '$lib/Base'

export default class View extends Base {
  constructor() {
    super()

    this.set('templates', {})
  }

  render({tpl, data, container=document.getElementById('app')}) {
    if (tpl) {
      const html = tpl(data)

      container.innerHTML = html
    }
  }
}
