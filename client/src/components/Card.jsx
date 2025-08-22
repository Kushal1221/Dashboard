import React from "react";

function Card({ data1, data2 }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 border-2 border-gray-600 p-3 sm:p-4 md:p-6 rounded-2xl bg-gray-900/40 hover:shadow-lg transition-shadow">

      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-200">
          {data1.label}
        </h3>
        <p className="text-xl md:text-2xl font-semibold text-white">
          {data1.value}
        </p>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-200">
          {data2.label}
        </h3>
        <p className="text-xl md:text-2xl font-semibold text-white">
          {data2.value}
        </p>
      </div>
    </div>
  );
}

export default Card;
