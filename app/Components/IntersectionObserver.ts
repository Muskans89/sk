// import { useEffect, useRef, useState } from 'react';

// const useIntersectionObserver = () => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 } // Adjust as needed
//     );

//     observer.observe(ref.current);

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref]);

//   return { ref, isVisible };
// };

// export default useIntersectionObserver;


import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef: HTMLDivElement | null = ref.current;
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Ensure isVisible is set to false when not intersecting
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return { ref, isVisible };
};

export default useIntersectionObserver;