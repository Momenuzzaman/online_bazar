import { useEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineGooglePlus } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { PropagateLoader } from "react-spinners";

// button loading
import { overrideStyle } from "../../utils/utils";
// redux
import { useDispatch, useSelector } from "react-redux";
import { messageClear, sellerLogin } from "../../store/Reducers/authReducer";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

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

    dispatch(sellerLogin(state));
  };

  // clear notification
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to Online Bazar</h2>
          <p className="text-sm mb-3">
            Please Sign In to your account and start your business
          </p>
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

            <button
              disabled={loader ? true : false}
              className="bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 mt-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Sign up"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account ?{" "}
                <Link to="/register" className="hover:text-orange-400 ">
                  register here
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="icon bg-orange-700  hover:shadow-orange-700/50 ">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="icon bg-indigo-700  hover:shadow-indigo-700/50 ">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className="icon bg-cyan-700  hover:shadow-cyan-700/50 ">
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className="icon bg-purple-700  hover:shadow-purple-700/50 ">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
