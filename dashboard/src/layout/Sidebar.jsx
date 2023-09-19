import { Link, useLocation } from "react-router-dom";
import logo from "../../src/images/logo_transparent.png";
import { useEffect, useState } from "react";
import { getNavs } from "../navigation";
import { BiLogInCircle } from "react-icons/bi";

// import { BiLogInCircle } from "react-icons/bi";
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  console.log(showSidebar);
  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNavs("seller");
    setAllNav(navs);
  }, []);

  console.log(showSidebar);
  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-500 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }  translate-x-100 transition-all duration-500`}
      >
        <div className="h-[90px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[70px]">
            <img className="w-full h-full" src={logo} alt="logo" />
          </Link>
        </div>
        {/* nav*/}
        <div className="px-[30px] mt-5">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-slate-600 shadow-indigo-500/30 text-white duration-500 "
                      : "text-[#d0d2d6] font-normal duration-200"
                  } px-[13px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ">
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
