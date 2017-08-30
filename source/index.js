/* eslint no-undef: "off" */

/* Handles page scrolling and applies class as necessary
 * @param {Element} el - The element attached to the directive
 * @param {num} scrollHeight - Apply class to element when page is
      scrolled this many pixels from top
 * @param {string} classToAdd - Class to add and remove
 */
const handleScroll = (el, scrollHeight = 100,
  classToAdd = 'sticky') => {
  if (window.pageYOffset >= scrollHeight &&
    !el.classList.contains(classToAdd)) {
    el.classList.add(classToAdd)
  } else if (window.pageYOffset < scrollHeight &&
    el.classList.contains(classToAdd)) {
    el.classList.remove(classToAdd)
  }
}

/* Throttle function from https://www.sitepoint.com/throttle-scroll-events/
 * Takes a function and wait time and returns a time-throttled version
 * @param {Function} fn - The function to throttle
 * @param {num} waitMs - Minimum time in millis to wait between function calls
 */
const throttle = (fn, waitMs) => {
  var time = Date.now()
  var timeout
  return function () {
    if ((time + waitMs - Date.now()) < 0) {
      fn()
      time = Date.now()
    } else {
      if (timeout) window.clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn()
      }, waitMs)
    }
  }
}

/* Adds event listener to the window based on scroll
 * When page is scrolled, call handlescroll with given arguments
 */
const VueScrollClass = {
  bind: (el, binding) => {
    // Attach throttled listening function to the element
    el.listener = throttle(() => {
      handleScroll(el, binding.value, binding.arg)
    }, 100)
    window.addEventListener('scroll', el.listener)
  },
  update: (el, binding) => {
    // If the element has been changed, rebind
    if (binding.oldValue !== binding.value) {
      VueScrollClass.unbind(el)
      VueScrollClass.bind(el, binding)
    }
    // Handle scroll regardless of binding change
    handleScroll(el, binding.value, binding.arg)
  },
  unbind: (el) => {
    // If the element has a listener, remove it
    if (el.listener) {
      window.removeEventListener('scroll', el.listener)
      el.listener = undefined
    }
  }
}

module.exports = VueScrollClass
