import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      let url = `https://data.covid19india.org/data.json`;
      const res = await fetch(url);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section className="mainbody">
        <h1> Live </h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>OUR</span>COUNTRY
                </p>
                <p className="card_total_card_small">INDIA</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main" style={{backgroundColor:"green"}}>
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>RECOVERED
                </p>
                <p className="card_total_card_small">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main" style={{backgroundColor:"yellow"}}>
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>CONFIRMED
                </p>
                <p className="card_total_card_small">{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main" style={{backgroundColor:"orange"}}>
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>DEATH
                </p>
                <p className="card_total_card_small">{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main" style={{backgroundColor:"blue"}}>
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span>ACTIVE
                </p>
                <p className="card_total_card_small">{data.active}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main" style={{backgroundColor:"darkpink"}}>
              <div className="card_inner">
                <p className="card_name">
                  <span>LAST</span>UPDATED
                </p>
                <p className="card_total_card_small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
