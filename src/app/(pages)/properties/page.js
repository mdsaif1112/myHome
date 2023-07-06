import useProperties from "@/utilities/hooks/useProperties";
import React from "react";
import Properties from "../shared/Properties/Properties";

export const metadata = {
  title: "Properties - My Home",
};

const page = () => {
  return (
    <>
      <Properties />
    </>
  );
};

export default page;
