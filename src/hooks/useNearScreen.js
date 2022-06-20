import { useEffect, useRef, useState } from "react";
function UseNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef.current : elementRef.current;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [distance, externalRef, once]);

  return { isNearScreen, elementRef };
}

export default UseNearScreen;
