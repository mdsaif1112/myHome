import { NextResponse } from "next/server";
import connectDb from "../connectDb";

export const GET = async () => {
  const services = [
    {
      id: 1,
      icon: "@/assets/images/house.png",
      title: "Sell your home",
      desc: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      id: 2,
      icon: "@/assets/images/house-key.png",
      title: "Rent your home",
      desc: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      id: 3,
      icon: "@/assets/images/apartment.png",
      title: "Buy a home",
      desc: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      id: 4,
      icon: "@/assets/images/searching.png",
      title: "Free marketing",
      desc: "We do a free evaluation to be sure you want to start selling.",
    },
  ];

  return NextResponse.json(services);
};
