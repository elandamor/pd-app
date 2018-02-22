/**
 * Preload an image
 * @param {url} URL - The url of the image to preload
 */
export const preloadImage = (url) => (
  new Promise((resolve, reject) => { // eslint-disable-line no-new
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  })
);

export const debounce = (fn, time) => {
  let timeout;

  return () => {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

export const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
