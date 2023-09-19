import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import img from "../../images/admin.jpg";
import { FaList } from "react-icons/fa";
const ChatSeller = () => {
  const [show, setShow] = useState(false);
  const sellerId = 1;
  return (
    <div className="page_body">
      <div className="page_container h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all  duration-500`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-bg_secondary md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              {/*  */}
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 rounded-md cursor-pointer bg-slate-700`}
              >
                {/* img section */}
                <div className="relative">
                  <img
                    className="w-[38px] max-w-[38px] h-[38px] border-white border-2 p-[2px] rounded-full"
                    src={img}
                    alt="img"
                  />
                  <div className="absolute w-[10px] h-[10px] right-0 bottom-0 bg-green-500 rounded-full"></div>
                </div>
                {/*  */}
                <div className=" flex justify-end items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2
                      className="text-bas
                     font-semibold"
                    >
                      Emon
                    </h2>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 rounded-md cursor-pointer`}
              >
                {/* img section */}
                <div className="relative">
                  <img
                    className="w-[38px] max-w-[38px] h-[38px] border-white border-2 p-[2px] rounded-full"
                    src={img}
                    alt="img"
                  />
                  <div className="absolute w-[10px] h-[10px] right-0 bottom-0 bg-green-500 rounded-full"></div>
                </div>
                {/*  */}
                <div className=" flex justify-end items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2
                      className="text-bas
                     font-semibold"
                    >
                      Emon
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* chat box */}
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[38px] h-[38px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                      src={img}
                      alt=""
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                  <span className="text-white">currentSeller?.name</span>
                </div>
              )}
              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            {/* message */}
            <div className="py-4">
              <div className="bg-slate-800 h-[calc(100vh-290px)] rounded-md overflow-y-auto p-3">
                <div className="w-full flex justify-start items-center ">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full bg-orange-500 shadow-lg text-white py-1 px-2 rounded-sm mt-1">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-full flex justify-end items-center ">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex flex-col items-start justify-center w-full bg-blue-500 shadow-lg text-white py-1 px-2 rounded-sm mt-1">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3">
              <input
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                type="text"
                placeholder="input your message"
              />
              <button
                disabled={sellerId ? false : true}
                className="shadow-lg bg-cyan-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSeller;
