import React from "react";
import OrderItem from "./components/OrderItem";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="px-4 sm:px:6 md:px-8">
          <div className="font-light uppercase mb-8">Order Summary</div>
          <div className="bg-white rounded-lg shadow mb-4 p-8 font-light">
            <OrderItem name="Meeyso P45 Pro" amount="N42,900" qty={1} />
            <OrderItem name="Men's Long Sleeve Shirt" amount="N6,800" qty={2} />
          </div>
          <div className="bg-white rounded-lg shadow py-4 px-8 flex justify-between">
            <span className="font-light">Total Cart Value:</span>
            <span className="font-bold">N52,100</span>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-16">
        <div className="px-4 sm:px:6 md:px-8">
          <div className="w-full max-w-md h-96 mx-auto">
            <div className="font-medium text-purple-900 text-3xl text-center">
              What Do You Do?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
