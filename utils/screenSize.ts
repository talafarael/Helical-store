import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState<number>(0); // Initialize with a default value

  useEffect(() => {
    // Check if code is running on the client side
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width };
};
