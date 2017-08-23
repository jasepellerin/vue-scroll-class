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
    el.classList.add(classToAdd);
  } else if (window.pageYOffset < scrollHeight &&
    el.classList.contains(classToAdd)) {
    el.classList.remove(classToAdd);
  }
};

/* Adds event listener to the window based on scroll
 * When page is scrolled, call handlescroll with given arguments
 */
const VueScrollClass = {
  bind: (el, binding) => {
    window.addEventListener('scroll', () => {
      handleScroll(el, binding.value, binding.arg);
    });
  },
  unbind: (el, binding) => {
    window.removeEventListener('scroll', () => {
      handleScroll(el, binding.value, binding.arg);
    });
  },
};

module.exports = VueScrollClass;
