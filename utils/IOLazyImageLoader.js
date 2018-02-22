import { preloadImage } from './helpers';

/**
 * Class to lazyload an image
 */
class IOLazyImageLoader {
  /**
   * Check browser support for IntersectionObserver(IO)
   * @return {boolean} true or false - True if browser supports IO
   */
  static get SUPPORTS_INTERSECTION_OBSERVER() {
    return ('IntersectionObserver' in window);
  }
  /**
   * Get css-class to set on image once it has been handled by IO
   * @return {string} css-class - The css class attached to a handled image
   */
  static get HANDLED_CLASS() {
    return 'lazy-image-handled';
  }
  /**
   * Get css-class to set on image once it has been loaded by preloader
   * @return {string} css-class - The css class attached to a loaded image
   */
  static get LOADED_CLASS() {
    return 'lazy-image-loaded';
  }

  constructor(image, reload) {
    // If image has to be reloaded...
    if (reload) {
      // ...remove respective classes from element
      image.classList.remove('lazy-image-handled');
      image.classList.remove('lazy-image-loaded');
    }
    // Load image immediately if IO is not supported
    if (!IOLazyImageLoader.SUPPORTS_INTERSECTION_OBSERVER) {
      this.preloadImage(image);
      return;
    }
    // Setup IO
    this.observer = new IntersectionObserver((entries) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('lazy-image-handled')) {
            return;
          }
          // ... otherwise label the image as handled ...
          entry.target.classList.add('lazy-image-handled');

          this.preloadImage(entry.target);
        }
      }
    });
    // ... observe image
    this.observer.observe(image);
  }

  disconnect() {
    if (!this.observer) {
      return;
    }

    this.observer.disconnect();
  }
  /**
   * Preload the respective image
   * @param {element} img - The image to be loaded
   * @return {callback} applyImage - A method that adds the image to the DOM
   */
  preloadImage(image) {
    // Get the source for the image.
    const src = image.dataset.src;
    // Do nothing if image source is missing.
    if (!src) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return preloadImage(src).then(() => this.applyImage(image, src));
  }
  /**
   * Add the respective image to the DOM
   */
  applyImage(img, src) {
    const el = img;

    el.classList.add('lazy-image-loaded');

    if (!el) {
      return;
    }
    // If target element is an image ...
    if (el.tagName.toLowerCase() === 'img') {
      // ... set src attribute of element ...
      el.src = src;
    } else {
      // ... otherwise set image source as background of element.
      el.style.backgroundImage = `url(${src})`;
    }
  }
}

export default IOLazyImageLoader;
