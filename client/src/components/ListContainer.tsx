import React from "react";

interface Props {
  children?: any;
}

const ListContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {children}
    </div>
  );
};

export default ListContainer;
