import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Industries from '../pages/Industries';
import Process from '../pages/Process';
import Clients from '../pages/Clients';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from '../pages/NotFound';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('navigation', handleNavigation);
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('navigation', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/industries':
        return <Industries />;
      case '/process':
        return <Process />;
      case '/clients':
        return <Clients />;
      case '/resources':
        return <Resources />;
      case '/contact':
        return <Contact />;
      default:
        if (currentPath.startsWith('/services/')) {
          return <Services serviceSlug={currentPath.split('/services/')[1]} />;
        }
        return <NotFound />;
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
};

export default Router;