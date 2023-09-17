import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 mt-5">
      <div className="w-full p-4 bg-bg_primary rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 input bg-[#283046]"
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="15">15</option>
          </select>
          <input
            className="px-4 input bg-bg_primary"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* title */}
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-text_primary">
            <div className="text-sm text-text_primary uppercase  border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Order Id</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex justify-between items-start  border-b border-slate-700">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap">
                  11111111111111111
                </div>
                <div className="py-4 w-[13%]">11</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link to={`/admin/dashboard/order/details`}>view</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 cursor-pointer w-[8%]"
                >
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                    123456789
                  </div>
                  <div className="py-4 w-[13%]">10</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          {" "}
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
