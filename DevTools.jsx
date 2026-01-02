import { useEffect } from 'react';

const DevTools = () => {
  useEffect(() => {

    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    const handleKeyDown = (e) => {
      if (
       
        (e.ctrlKey && e.shiftKey) || 
        (e.ctrlKey && e.shiftKey ) || 
        (e.ctrlKey && e.keyCode) 
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default DevTools;
