import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Location_card from "../../Shared/Location_Card/Location_card";
import Port_card from "../../Shared/Port_Card/Port_card";
import Sub_header_link from "../../Shared/Sub_Header_Link/Sub_header_link";
import "./Favoris.scss";

export default function Favoris() {
  const [toggle, setToggle] = useState("locations");
  return (
    <div className="favoris">
      <Navbar />
      <Sub_header_link link={"favoris"} />

      <div className="container-1179px">
        <div className="toggle_wrapper">
          <div className="toggle_two_btn">
            <button
              onClick={() => setToggle("locations")}
              className={`button ${toggle === "locations" && "active"}`}
            >
              Locations
            </button>
            <button
              onClick={() => setToggle("port")}
              className={`button ${toggle === "port" && "active"}`}
            >
              Ports
            </button>
          </div>
        </div>

        <div className="space75"></div>

        <div className="card_title">
          <img src={images.Heart_filled} alt="" />
          <Link to="/favoris">Mes bateaux favoris</Link>
        </div>

        {toggle === "locations" ? <Location_card /> : <Port_card />}
      </div>

      <div className="space100"></div>

      <hr />

      <Footer />
    </div>
  );
}