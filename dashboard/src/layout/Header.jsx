import { FaList } from "react-icons/fa";
import adminImg from "../../src/images/admin.jpg";
const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center  bg-[#283046] text-[#d0d2d6] px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex items-center justify-center sm:mr-3   lg:hidden h-[35px] cursor-pointer rounded-sm  bg-indigo-500 shadow-lg hover:shadow-indigo-500/50"
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="hidden md:block flex-grow w-1/3">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden w-1/3"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-sm font-bold">Emon</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>

              <img
                className="w-[45px] h-[45px] rounded-full overflow-hidden"
                src={adminImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
