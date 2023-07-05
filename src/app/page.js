import * as React from "react";
import Banner from "./(pages)/(home)/Banner/Banner";
import LatestProperties from "./(pages)/(home)/LatestProperties/LatestProperties";
import Services from "./(pages)/(home)/Services/Services";

export const metadata = {
  title: "My Home",
};

export default function Home() {
  return (
    <>
      <Banner />
      <LatestProperties />
      <Services />
    </>
  );
}
