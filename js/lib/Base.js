export default class Base {
  constructor() {
    this.data = {}
    this.events = {}
    this.observables = {}
  }

  set(prop, value) {
    this.data[prop] = value
    if (this.observables[prop]) {
      this.emit(prop, value)
    }
  }

  get(prop) {
    if (!prop) {
      return this.data
    }

    return this.data[prop]
  }

  on(event, callback) {
    if (typeof callback === 'function') {
      if (event.startsWith('change:')) {
        event = event.replace('change:', '')
        this.observables[event] = true
      }

      this.events[event] = callback
    } else {
      console.warn(`${Object.keys({callback})[0]} is not a function`)
    }
  }

  emit(event, args) {
    return this.events[event](args)
  }
}

window.x = new Base()
