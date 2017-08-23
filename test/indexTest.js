import Vue from 'vue/dist/vue';
import expect from 'expect.js';

describe('vue-scroll-class', () => {
  // Initiate variables for vue-scroll-class and the window object
  let window;

  beforeEach(() => {
    // Reset variables before each test
    window = {};
  });

  it('should add class sticky when scrolled 100px', () => {
    const vm = new Vue({
      template: '<div><span v-show="foo">hello</span></div>',
      data: {
        foo: true,
      },
    }).$mount();
    expect(vm.$el.firstChild.getAttribute('test') === 'ok');
    console.log(vm.$el.firstChild.innerHTML);
    window.scrollY = 1000;
  });
});
