import Vue from 'vue/dist/vue'
import expect from 'expect.js'
import Vsc from '../source/index'

describe('vue-scroll-class', () => {
  const defaultClass = 'sticky'
  //  const testClass = 'otherClass'
  //  const defaultScrollDistance = 100
  //  const testScrollDistance = 500

  describe('defaults', () => {
    let app
    let oldApp

    beforeEach(() => {
      // Create a basic div with id app and append to document
      app = document.createElement('div')
      app.setAttribute('id', 'app')
      document.body.appendChild(app)

      // Mount Vue instance to #app
      new Vue({
        directives: {
          'scroll-class': Vsc
        }
      }).$mount('#app')

      // Set body height to allow scrolling
      document.body.style.height = '10000px'
    })

    afterEach(() => {
      // Remove old #app divs
      oldApp = document.getElementById('app')
      if (oldApp) {
        document.body.removeChild(oldApp)
      }
    })

    it('should not apply class before scrolling', () => {
      expect(window.pageYOffset).to.be(0)
      expect(document.getElementById('app')
        .classList.contains(defaultClass)).to.be(false)
    })

    it('should apply class after scrolling default distance', (done) => {
      console.log('Body height: ' + document.body.style.height)
      console.log('Window height: ' + window.innerHeight)
      expect(window.pageYOffset).to.be(0)
      window.scrollTo(0, 100)
      window.setTimeout(() => {
        console.log(window.pageYOffset)
        expect(window.pageYOffset).to.be(100)
        expect(document.getElementById('app')
          .classList.contains(defaultClass)).to.be(true)
        done()
      }, 1000)
    })
  })
})
