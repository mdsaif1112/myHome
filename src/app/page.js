import * as React from "react";
import LatestProperties from "./(pages)/(home)/LatestProperties/LatestProperties";
import Services from "./(pages)/(home)/Services/Services";
import { usePathname } from "next/navigation";
import LatestRent from "./(pages)/(home)/LatestRent/LatestRent";
import Banner from "./(pages)/shared/Banner/Banner";

export const metadata = {
  title: "My Home",
};

export default function Home() {
  return (
    <>
      <Banner title={'Find Your Dream Home'} desc={'We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.'}/>
      <LatestProperties />
      <Services />
      <LatestRent />
    </>
  );
}
