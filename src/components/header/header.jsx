import AuthNav from 'components/FormLogIn/AutchNav';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selector';

const { NavLink } = require('react-router-dom');

const Header = () => {
  const isLoggedIn = useSelector(getIsLoading);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <AuthNav />
        </>
      ) : (
        <>
          <NavLink to={'/login'}>Log In</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </>
      )}
    </div>
  );
};
export default Header;
