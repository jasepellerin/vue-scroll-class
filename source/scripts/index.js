/* eslint no-undef: "off" */
const handleScroll = (el, scrollHeight = 100,
  addedClass = 'sticky') => {
  if (window.scrollY >= scrollHeight) {
    el.classList.add(addedClass);
  } else {
    el.classList.remove(addedClass);
  }
};

export default {
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
