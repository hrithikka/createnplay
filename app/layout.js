import './globals.css';
import React from 'react';

export const metadata = {
  title: "Create'n'Play",
  description: "Your ultimate gaming companion",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="relative">
        {/* The children will be rendered here */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
