import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../public/images/logo_transparent.png";
import { adminLogin } from "../../store/Reducers/authReducer";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    // console.log(state);
    dispatch(adminLogin(state));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[80px]">
              <img className="w-full h-full" src={logo} alt="image" />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="input-parent">
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                value={state.email}
                onChange={inputHandler}
                required
              />
            </div>
            <div className="input-parent mb-2">
              <label htmlFor="password">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                value={state.password}
                onChange={inputHandler}
                required
              />
            </div>

            <button className="bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 mt-3">
              Login in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
