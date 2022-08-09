import React from 'react';
import Header from '~/components/Layout/components/Header/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
