import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousal from "../components/Carousal";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
        {/* <Carousal /> */}
        <Search />

        <div className="m-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div>
          {" "}
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
}
