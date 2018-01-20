
import './sth.less'

app.component('sth', {
  template: require('./sth.jade')(),
  bindings: {
    amount: '<',
  },
  controller: class sth {
    constructor ($attrs) {
      this.append = typeof $attrs.append !== 'undefined'
    }
  }
})
