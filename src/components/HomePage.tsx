import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' && <h1 className="title">Home page</h1>}
      {pathname.startsWith('/tabs') && <h1 className="title">Tabs page</h1>}
      <Outlet />{' '}
    </>
  );
};
