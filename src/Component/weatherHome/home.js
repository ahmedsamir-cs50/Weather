import React, { useEffect, useState } from "react";
import { WeatherApiHook } from "./weatherApi";
import { Col, Row } from "react-bootstrap";

export const Home = () => {
  const [data, HandlePress, HandleChange] = WeatherApiHook();

  return (
    <div className="App d-flex align-items-center justify-content-around " >
      <div className="wrapper" style={{width:"70%"}}>
      <form onSubmit={HandlePress} className="Location">
       
       <input placeholder="Enter City" onKeyUp={HandleChange}></input>
        <button type="submit">SUBMIT</button>
       
      </form>
   <div className={!data?"d-none":"w"} style={{transition:"1s ease"}}>
      <Row className="summary d-flex flex-row justify-content-evenly align-items-center">
        <Col md={8} className="d-flex justify-content-center">
      <div>
          <h4>Current Weather</h4>
          <h1 className="mx-auto text-center">{data?.temp}°</h1>
          </div>
        </Col>
        <Col>
       
          <h4>{data?.max_temp}°</h4>
          <h4>{data?.min_temp}°</h4>
        
        </Col>
        <Col>
       
          <h6>Feels Like</h6>

          <h5>{data?.feels_like}°</h5>
      
        </Col>
      </Row>
      <Row className="prop d-flex flex-row justify-content-evenly align-items-center">
        <Col  sm={4}>
          <h4>Humidity</h4>
          <h4>{data?.humidity}</h4>
        </Col>
        <Col sm={4}>
          <h4>Wind Degrees</h4>
          <h4>{data?.wind_degrees}°</h4>
        </Col>
        <Col>
          <h4>Wind Speed</h4>
          <h4>{data?.wind_speed} <span>Km-h</span></h4>
        </Col>
      </Row>
      </div>
      </div>
    </div>
  );
};
