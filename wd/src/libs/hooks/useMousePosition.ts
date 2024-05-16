import React from 'react';
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0 as number,
    y: 0 as number,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: {
      clientX: number;
      clientY: number;
    }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
