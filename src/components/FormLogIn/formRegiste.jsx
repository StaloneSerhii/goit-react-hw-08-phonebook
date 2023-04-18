import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const val = e.target.name;
    switch (val) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password  }));
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <span>name</span>
      <input type="text" value={name} name="name" onChange={handleChange} />
      <span>E-mail</span>
      <input type="email" value={email} name="email" onChange={handleChange} />
      <span>Password</span>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Register;
