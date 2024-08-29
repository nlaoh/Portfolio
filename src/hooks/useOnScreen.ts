import {useEffect, useState} from 'react';

const useOnScreen = (ref: React.RefObject<Element>, threshold = 0.00001) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current; // Create a local variable to store ref.current

    if (!node) return; // Return early if ref.current is not defined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target); // Stop observing after first trigger
        }
      },
      {
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // Use the local variable here
    };
  }, [ref, threshold]); // Ensure ref and threshold are included in the dependencies array

  return isIntersecting;
};

export default useOnScreen;
