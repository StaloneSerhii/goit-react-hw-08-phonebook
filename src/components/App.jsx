import { Route, Routes } from 'react-router-dom';

import Register from './FormLogIn/formRegiste';
import LogIn from './FormLogIn/formLogIn';
import Layout from './Layout';

export const App = () => {

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
        </Route>
      </Routes>
    </div>
  );
};
