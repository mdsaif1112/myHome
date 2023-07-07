"use client";

import Loader from "@/components/Loader/Loader";
import useUserType from "@/utilities/hooks/useUserType";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const page = () => {
  const { userType, isLoading } = useUserType();

  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  if (userType !== "admin") {
    router.push("/");

    return;
  }

  return <div>Dashboard</div>;
};

export default page;
