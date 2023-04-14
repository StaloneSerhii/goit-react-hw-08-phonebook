import { useState } from "react";
import { useDispatch } from "react-redux";

const LogIn = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleChange = ({ traget: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
const handleSubmit =(e)=>{
    e.preventDefault();
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
