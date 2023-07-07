import React, { useContext } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

export const metadata = {
  title: "Admin - My Home",
};

const page = () => {
  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default page;
