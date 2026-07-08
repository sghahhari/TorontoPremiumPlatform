import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function LayoutInner({ children, currentPageName }) {
  if (currentPageName === 'Admin' || ['Login', 'Signup'].includes(currentPageName)) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <LayoutInner currentPageName={currentPageName}>
      {children}
    </LayoutInner>
  );
}