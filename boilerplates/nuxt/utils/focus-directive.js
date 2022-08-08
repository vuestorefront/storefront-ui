const focus = {
  bind: (el) => {
    el.mouseHandler = () => {
      el.style.outline = 'none';
    };
    el.keyHandler = (e) => {
      el.style.outline = '';
      if (e.code === 'Tab') {
        el.focus();
      }
    };
    window.addEventListener('mousedown', el.mouseHandler);
    el.addEventListener('keyup', el.keyHandler);
  },
  unbind(el) {
    window.removeEventListener('mousedown', el.mouseHandler);
    el.removeEventListener('keyup', el.keyHandler);
  },
};

export default focus;
