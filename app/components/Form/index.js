import React from 'react';

interface FormProps { // eslint-disable-line no-undef
  /**
   * Automatically prevents the default browser behavior so you don't have to
   */
  onSubmit: () => any;
  children?: JSX.Element; // eslint-disable-line no-undef
}

// eslint-disable-next-line no-undef
const Form = ({ onSubmit, children }: FormProps) => (
  <form // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
    className="c-form"
    onKeyDown={
      (e) => {
        /**
         * Note: Pressing enter in some input in a browser forms
         *  triggers onClick on the first child button
         *
         * So, prevent `enter` from triggering `onClick` on any buttons
         *  and instead trigger onSubmit
         */
        if (e.key === 'Enter') {
          e.preventDefault();
          onSubmit();
        }
      }
    }

    onSubmit={
      (e) => {
        /**
         * Prevent submit from reloading the page
         */
        e.preventDefault();
        e.stopPropagation();
        onSubmit();
      }
    }
  >
    {children}
  </form>
);

export default Form;
