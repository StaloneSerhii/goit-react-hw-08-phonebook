import AuthNav from 'components/FormLogIn/AutchNav';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selector';
import { Button } from '@mui/material';
import './header.css';
const { NavLink } = require('react-router-dom');
const Header = () => {
  const isLoggedIn = useSelector(getIsLoading);

  return (
    <div className="headerBar">
      <Button variant="contained">
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn ? (
        <>
          <Button variant="contained">
            <NavLink to="/contacts">Contacts</NavLink>
          </Button>
          <AuthNav />
        </>
      ) : (
        <>
          <Button variant="contained">
            <NavLink to={'/login'}>Log In</NavLink>
          </Button>
          <Button variant="contained">
            <NavLink to={'/register'}>Register</NavLink>
          </Button>
        </>
      )}
    </div>
  );
};
export default Header;
