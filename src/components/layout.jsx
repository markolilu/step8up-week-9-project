// to combine header and footer components into one layout component that can be used across all pages
import React from 'react';
import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

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