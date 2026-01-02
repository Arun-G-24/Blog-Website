import { useEffect } from 'react';

const DevTools = () => {
  useEffect(() => {

    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);


    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      
    };
  }, []);
};

export default DevTools;
