import { useRef, useEffect } from "react";

export const usePortal = () => {
  const portalRef = useRef(document.createElement("div"));

  useEffect(() => {
    const portal = portalRef.current;
    document.body.appendChild(portal);

    return () => {
      portal.remove();
    };
  }, []);

  return portalRef.current;
};
