import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/operations";

const LogIn = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const val = e.target.name
    switch (val) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };
const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(logIn({email,password}))
    setEmail('')
    setPassword('')
}
  return (
    <form onSubmit={handleSubmit}>
      <span>E-mail</span>
      <input type="email" value={email} name="email" onChange={handleChange}/>
      <span>Password</span>
      <input type='password' value={password} name="password" onChange={handleChange}/>
      <button type="submit">Login</button>
    </form>
  );
};

export default LogIn;
