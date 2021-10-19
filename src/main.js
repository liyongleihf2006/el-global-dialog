import Vue from 'vue'
import { cloneDeep } from 'lodash'
import Dialog from './Dialog'
const DialogConstructor = Vue.extend(Dialog)
export default function dialog(options = {}) {
  const propsData = { ...options }
  Object.assign(propsData, {
    data: cloneDeep(options.data),
    closed() {
      const closed = options.closed
      if (closed) {
        closed()
      }
      document.body.removeChild(instance.$el)
    }
  })
  const instance = new DialogConstructor({
    inheritAttrs: false,
    propsData
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}
Vue.prototype.$dialog = dialog
