import { useEffect, useState } from "react";

const useScroll = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);

    window.removeEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offsetY;
};

export default useScroll;
