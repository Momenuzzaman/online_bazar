import img from "../../images/admin.jpg";

const OrderDetails = () => {
  return (
    <div className="page_body">
      <div className="page_container">
        {/* select option */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-text_primary">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-bg_secondary border border-slate-700 rounded-md text-text_primary"
          >
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="placed">placed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#123456</h2>
            <span>11 Nov 2023</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-[32%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">Deliver to : Warehouse</h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status : Paid</h2>
                  <span className="text-base">order</span>
                </div>
                <span>Price : 1000</span>
                <div className="mt-4 flex flex-col gap-8">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img className="w-[45px] h-[45px]" src={img} alt="" />
                      <div>
                        <h2>Polo T-Shirt</h2>
                        <p>
                          <span>Brand : Easy</span>
                          <span> </span>
                          <span className="text-lg">Quantity : 2</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
