import React from "react";

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-300 flex justify-center h-48 items-center px-3">
      <h2 className="text-gray-800 font-semibold text-center text-2xl sm:text-3xl">
        {children}
      </h2>
    </div>
  );
};

export default PageHeader;
