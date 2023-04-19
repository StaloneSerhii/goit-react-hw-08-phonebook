import { Suspense } from 'react';
import './app.css'
const {  Outlet } = require('react-router-dom');
const { default: Header } = require('./header/header');

const Layout = () => {
  return (
    <div>
      <header className='header'>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </header>
    </div>
  );
};
export default Layout;
