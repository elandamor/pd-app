/**
 * Class to lazyload lists
 */
class IOPaginator {
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
    return 'lazy-paginator-handled';
  }

  constructor(paginator, cb) {
    if (!IOPaginator.SUPPORTS_INTERSECTION_OBSERVER) {
      return;
    }
    // Setup IO
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) { // eslint-disable-line no-restricted-syntax
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('lazy-paginator-handled')) {
            return;
          }

          entry.target.classList.add('lazy-paginator-handled');

          cb();
        }
      }
    });

    // ... observe paginator
    this.observer.observe(paginator);
  }

  _disconnect() {
    if (!this.observer) {
      return;
    }

    this.observer.disconnect();
  }
}

export default IOPaginator;
