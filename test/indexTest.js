import Vue from 'vue/dist/vue'
import expect from 'expect.js'
import Vsc from '../source/index'

describe('vue-scroll-class', () => {
  const defaultClass = 'sticky'
  //  const testClass = 'otherClass'
  //  const defaultScrollDistance = 100
  //  const testScrollDistance = 500

  describe('defaults', () => {
    let vm

    beforeEach(() => {
      vm = new Vue({
        template: `<div style="{height: 1000px}">
                  <span v-scroll-class>hello</span></div>`,
        directives: {
          'scroll-class': Vsc
        }
      }).$mount()
    })

    it('should not apply class before scrolling', () => {
      expect(window.pageYOffset).to.be(0)
      expect(vm.$el.firstChild.classList.contains(defaultClass)).to.be(false)
    })

    it('should apply class after scrolling default distance', () => {
      console.log(window.innerHeight)
      expect(window.pageYOffset).to.be(0)
      window.scrollTo(0, 100)
      expect(window.pageYOffset).to.be(100)
      expect(vm.$el.firstChild.classList.contains(defaultClass)).to.be(true)
    })
  })
})
