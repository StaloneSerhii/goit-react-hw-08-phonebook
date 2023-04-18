import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "redux/authPer/auth-selector";
import { logOut } from "redux/operations";


const AuthNav = () => {
  const name = useSelector(getUsername)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Welcom {name}</p>
      <button onClick={()=> dispatch(logOut())}>Exit</button>
    </div>
  );
};
export default AuthNav