"use client";

import React, { useContext } from "react";
import Favorites from "./Favorites/Favorites";
import { AuthContext } from "@/providers/AuthProvider";
import Loader from "@/components/Loader/Loader";
import { LoginContext } from "@/providers/LoginProvider";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Favorites - My Home",
};

const page = () => {
  const { user, loading } = useContext(AuthContext);

  const { setOpen } = useContext(LoginContext);

  const router = useRouter();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    setOpen(true);

    router.push("/");
    return;
  }

  return (
    <>
      <Favorites />
    </>
  );
};

export default page;
