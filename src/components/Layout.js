import { Suspense } from 'react';

const {  Outlet } = require('react-router-dom');
const { default: Header } = require('./header/header');

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </header>
    </div>
  );
};
export default Layout;
