import { RefObject } from 'react';

// To show hide and show Header on scroll 100% height of the root is needed. But
// when this height is set on the root Home page and Game page stop extending to
// the bottom of the page. To enable those pages
// to extend the height has to be set to 100vh
const changeParentHeight = (ref: RefObject<HTMLDivElement>, height: string) => {
  const root = ref.current?.parentElement;
  if (root !== undefined && root !== null) {
    root.style.height = height;
  }
};

export { changeParentHeight };
