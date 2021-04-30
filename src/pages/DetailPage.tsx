import React from "react";

interface Props {
  setStep: Function;
}

const DetailPage = (props: Props) => {
  const { setStep } = props;
  return (
    <div className="w-full max-w-md h-96 mx-auto">
      <div className="font-medium text-purple-900 text-3xl text-center mb-4">
        What Do You Do?
      </div>
      <div className="cards justify-between">
        <div className="bg-white rounded-lg shadow mb-4 p-8">
          Paid Employment
        </div>
        <div className="bg-white rounded-lg shadow mb-4 p-8">
          Self Employed/ Freelance
        </div>
        <div className="bg-white rounded-lg shadow mb-4 p-8">
          Corporate Organization
        </div>
      </div>
      <div className="text-purple-900 text-lg mb-2">
        How much do you get paid monthly?
      </div>
      <input
        className="text-lg bg-white rounded-lg shadow px-4 py-2 mb-6"
        type="text"
      />
      <div className="text-purple-900 text-lg mb-4">
        When is your next salary date?
      </div>
      <input
        className="text-lg bg-white rounded-lg shadow px-4 py-2 mb-6"
        type="date"
      />
      <div className="text-purple-900 text-lg mb-2">
        Do you have any existing loan(s)?
      </div>
      <div className="bg-white rounded-lg shadow mb-8 p-8">Yes | No</div>
      <div className="text-center">
        <button
          className="rounded-full border-2 px-6 py-2 border-purple-900 "
          onClick={() => setStep(1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
