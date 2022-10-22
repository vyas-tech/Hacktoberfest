import axios from "axios";
import React from "react";
import { useState } from "react";
import "./wether.css";

interface WetherProps { }

interface WetherState {
  location: string;
  country: string;
  wetherCondition: string;
  currentTime: string;
  temerature: string;
  image: string;
  wetherLocation: string;
}

function location() {
  let data = prompt("Enter Your Location");
  return data;
} 

class Wether extends React.Component<WetherProps, WetherState> {
  async fetchData() {
    const key = "<YOUR OWN API KEY FROM WETHERAPI>";

    const count = "Nepal"
    let data = await axios(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${count}&aqi=yes`
    );
    const wetherData = JSON.parse(data.request.response);
    this.setState({
      country: wetherData.location.country,
      location: wetherData.location.name,
      image: wetherData.current.condition.icon,
      temerature: wetherData.current.temp_c,
      currentTime: wetherData.location.localtime,
      wetherCondition: wetherData.current.condition.text,
    } as WetherState);
  }
  render() {
    this.fetchData()
    return (
      <div className="parentContainer">
        {/* <button onClick={() => }>⟳</button> */}
        {(!this.state?.country && "Loading......") || (
          <div className="main-container">
            <img className="wetherIcon" src={this.state.image} alt='this is wether icon' />
            <p className="currentTemp">
              {this.state.temerature}
              <sup>o</sup>C
            </p>
            <p className="wetherCondition">{this.state.wetherCondition}</p>
            <p className="locationName">
              {this.state.location + " , " + this.state.country}
            </p>

          </div>
        )}
      </div>
    );
  }
}

export default Wether;
