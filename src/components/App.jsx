import { Route, Routes } from 'react-router-dom';

import Register from './FormLogIn/formRegiste';
import LogIn from './FormLogIn/formLogIn';
import Layout from './Layout';
import { ContactsForm } from './header/foma';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';

export const App = () => {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchCurrentUser())
},[dispatch])
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/contacts' element={<ContactsForm/>}/>
        </Route>
      </Routes>
    </div>
  );
};
