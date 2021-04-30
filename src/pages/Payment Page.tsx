import React from "react";

interface Props {
  setStep: Function;
}

const PaymentPage = (props: Props) => {
  return (
    <div className="w-full max-w-md h-96 mx-auto">
      <div className="font-medium text-purple-900 text-3xl text-center mb-4">
        Choose Your Plan
      </div>
    </div>
  );
};

export default PaymentPage;
