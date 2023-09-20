import { BsCurrencyDollar } from "react-icons/bs";
import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

const handleOnWheel = ({ deltaY }) => {
  console.log(`onWheel: ${deltaY}`);
};

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payment = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">#123</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">
            pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">10 aug 2023</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer text-white rounded-sm text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="page_body">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$3000</h2>
            <span className="text-sm font-normal">Total Sales</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$1500</h2>
            <span className="text-sm font-normal">Avaiable Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$500</h2>
            <span className="text-sm font-normal">Withdrawal Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$700</h2>
            <span className="text-sm font-normal">Pending amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 pb-4">
        <div className="bg-bg_primary text-text_primary rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="py-5">
            <from>
              <div className="flex flex-wrap gap-3">
                <input min="0" type="number" className="input w-[79%]" />
                <button className="bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2 text-sm ">
                  Submit
                </button>
              </div>
            </from>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending withdrawal request</h2>
            <div className="w-full">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[500px]">
                  <div className="flex bg-[#161d31] uppercase text-xs">
                    <div className="w-[25%] p-2">No</div>
                    <div className="w-[25%] p-2">Amount</div>
                    <div className="w-[25%] p-2">status</div>
                    <div className="w-[25%] p-2">date</div>
                    <div className="w-[25%] p-2">action</div>
                  </div>
                  {
                    <List
                      style={{ minWidth: "340px", overflowX: "hidden" }}
                      className="List"
                      height={350}
                      itemCount={100}
                      itemSize={35}
                      outerElementType={outerElementType}
                    >
                      {Row}
                    </List>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#283046]  text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg pb-4">Success Withdrawal</h2>
          <div className="w-full">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="flex bg-[#161d31] uppercase text-xs">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">status</div>
                  <div className="w-[25%] p-2">date</div>
                  <div className="w-[25%] p-2">action</div>
                </div>
                {
                  <List
                    style={{ minWidth: "340px", overflowX: "hidden" }}
                    className="List"
                    height={350}
                    itemCount={100}
                    itemSize={35}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
