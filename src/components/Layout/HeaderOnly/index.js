import React from 'react';
import Header from '~/components/Layout/components/Header/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
