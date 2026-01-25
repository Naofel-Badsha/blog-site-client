import React from "react";

const DashboareLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1>SideBar</h1>
      </div>
      {children}
      <div>
        <h1>Content Details</h1>
      </div>
    </div>
  );
};

export default DashboareLayout;
