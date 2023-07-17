import { useEffect, useRef, type RefObject } from 'react';
import { useShortcut } from '~hooks/useShortcut';
export { }

console.log("test");

export const setShortcut = () => {
  console.log("TEST");
  useShortcut({
    key: "f",
    shiftKey: true,
    onKeyDown: () => alert("Foo!"),
  });
}

setShortcut();
