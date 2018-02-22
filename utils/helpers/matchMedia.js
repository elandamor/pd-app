// eslint-disable-next-line func-names
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    // eslint-disable-next-line object-shorthand
    addListener: function () {}, // eslint-disable-line func-names
    // eslint-disable-next-line object-shorthand
    removeListener: function () {}, // eslint-disable-line func-names
  };
};

export default window.matchMedia;
