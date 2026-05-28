// to combine header and footer components into one layout component that can be used across all pages
import React from 'react';
import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Header from './header';

const Layout = () => {

  return (

    <div>
      <Header />

      <div>
  
        {/* Content Area */}
        <main className='content'>
          <Outlet />
        </main>
      </div>

          {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;