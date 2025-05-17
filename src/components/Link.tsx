import React from 'react';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, className, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
      return;
    }
    
    // Simple client-side routing
    window.history.pushState({}, '', to);
    // Dispatch a navigation event that our router will listen to
    window.dispatchEvent(new Event('navigation'));
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};