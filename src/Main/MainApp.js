import React, { Component } from "react";
import Dialog from "../Components/Mosque";
import School from "../Components/School";
import Church from "../Components/Church";
import Factory from "../Components/Factory";

export default class MainApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <div className="MainApp">
          <div className="text-white text-4xl py-2 text-base font-bold">
            Map of Bangladesh
          </div>
          <div className="absolute text-gray-600 m-10">
            <strong className="underline">Instructions</strong>
            <p>
              {" "}
              Click hold and release to select a landmark <br /> Drag to desired
              location and click again to place the landmark
              <br />
              refresh the page to reset the landmarks to their default positions
            </p>
          </div>

          {/* <div className="img-container">
            <img src={map} width="100%" height="auto" alt="map of bangladesh" srcset=""/>
         </div> */}
          <div className="white">
            <div
              style={{
                backgroundImage: `url("https://res.cloudinary.com/techknight/image/upload/v1618016217/mao_e86qvn.png")`,
              }}
              className="map"
            ></div>
          </div>
          <Dialog />
          <School />
          <Factory />
          <Church />
        </div>
      </div>
    );
  }
}
