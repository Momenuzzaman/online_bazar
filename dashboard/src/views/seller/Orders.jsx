import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import Search from "../components/Search";
import { useState } from "react";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="page_body">
      <div className="page_container">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  i
                </td>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  price
                </td>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <span>status</span>
                </td>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <span>status</span>
                </td>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  date
                </td>
                <td
                  scope="row"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <Link
                    to={`/seller/dashboard/order/details/1`}
                    className="p-[6px] w-[30px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center"
                  >
                    <FaEye />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
