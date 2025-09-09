import { useNavigate } from 'react-router-dom';

export const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = (path: string, options?: { state?: any; hash?: string } | string) => {
    const hash = typeof options === 'string' ? options : options?.hash;
    if (path === '/' && hash) {
      // If we're already on the homepage, just scroll
      if (window.location.pathname === '/') {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      
      // Otherwise, navigate and then scroll after a delay to ensure page is rendered
      navigate(path, { state: typeof options === 'object' ? options.state : undefined });
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Regular navigation without scroll
      navigate(path);
    }
  };

  return navigateAndScroll;
};
