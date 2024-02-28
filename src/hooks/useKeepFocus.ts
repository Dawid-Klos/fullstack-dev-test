import { useEffect, useRef } from "react";

export const useKeepFocus = () => {
  const componentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: "instant" });
    }
  });

  return componentRef;
};
