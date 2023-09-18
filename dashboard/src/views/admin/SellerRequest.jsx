import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <div className="flex justify-between items-center">
          <select className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]">
            <option value="5">5</option>
            <option value="5">15</option>
            <option value="5">25</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#777b85]">
            <thead className="text-xs text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>

                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal">
              <tr>
                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  +
                </td>

                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  <span>name</span>
                </td>
                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  <span>abc@gmail.com</span>
                </td>
                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  <span>status</span>
                </td>
                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  <span>deactivate</span>
                </td>

                <td
                  scope="row"
                  className="py-1 px-4 font-medium whitespace-nowrap"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Link
                      to={`/admin/dashboard/seller/details`}
                      className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={18}
            parPage={parPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerRequest;
