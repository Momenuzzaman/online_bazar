import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

const handleOnWheel = ({ deltaY }) => {
  console.log(`onWheel: ${deltaY}`);
};

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
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
      <div className="page_container text-text_primary">
        <h2 className=" text-xl font-medium pb-5">Withdrawal Request</h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto ">
            <div className="bg-[#161d31] uppercase text-xs min-w-[340px] flex">
              <div className="payment_title">No</div>
              <div className="payment_title">Amount</div>
              <div className="payment_title">Status</div>
              <div className="payment_title">date</div>
              <div className="payment_title">action</div>
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
  );
};

export default PaymentRequest;
