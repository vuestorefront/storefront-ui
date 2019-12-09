function centeredDecorator() {
  return {
    template:
      '<div style="display: flex; justify-content: center; align-items: center;"><story/></div>'
  };
}

function withCustomStyles(styles) {
  return {
    template: '<div style="' + styles + '"><story/></div>'
  };
}

module.exports = {
  centeredDecorator,
  withCustomStyles
};
