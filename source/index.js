/* eslint no-undef: "off" */
let classAdded = false;

/* Handles page scrolling and applies class as necessary
 * @param {Element} el - The element attached to the directive
 * @param {num} scrollHeight - Apply class to element when page is
      scrolled this many pixels from top
 * @param {string} classToAdd - Class to add and remove
 */
const handleScroll = (el, scrollHeight = 100,
  classToAdd = 'sticky') => {
  if (window.scrollY >= scrollHeight && !classAdded) {
    el.classList.add(classToAdd);
    classAdded = true;
  } else if (window.scrollY < scrollHeight && classAdded) {
    el.classList.remove(classToAdd);
    classAdded = false;
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
