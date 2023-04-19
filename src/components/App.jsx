import { Route, Routes } from 'react-router-dom';
import Register from './FormLogIn/formRegiste';
import LogIn from './FormLogIn/formLogIn';
import Layout from './Layout';
import { ContactsForm } from './header/foma';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { PrivateRoute } from 'redux/privareRoute';
import { RestrictedRoute } from 'redux/restriktedRoute';
import { getFetching } from 'redux/authPer/auth-selector';
import './app.css'

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getFetching);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isFetching ? (
    isFetching
  ) : (
    <div className='bg'>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<img src='https://risovach.ru/upload/2016/04/mem/gusi_111527207_orig_.jpg' alt='img-us' width='380px'/>}/>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsForm />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
