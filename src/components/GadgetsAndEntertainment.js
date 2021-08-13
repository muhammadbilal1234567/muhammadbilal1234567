import React, { useState } from "react";

const GadgetsAndEntertainment = () => {
  const [state, setstate] = useState([
    {
      coinType: "Bitcoin",
      value1: "31273,00 USD 7,24%",
      value2: "0,2765 BTC",
      value3: "8716,524 USD",
    },
    {
      coinType: "Etherium",
      value1: "31273,00 USD 7,24%",
      value2: "0,2765 BTC",
      value3: "8716,524 USD",
    },
    {
      coinType: "Binance Coin",
      value1: "31273,00 USD 7,24%",
      value2: "0,2765 BTC",
      value3: "8716,524 USD",
    },
    {
      coinType: "LiteCoin",
      value1: "31273,00 USD 7,24%",
      value2: "0,2765 BTC",
      value3: "8716,524 USD",
    },
    {
      coinType: "XRP",
      value1: "31273,00 USD 7,24%",
      value2: "0,2765 BTC",
      value3: "8716,524 USD",
    },
  ]);
  const data = state.map((obj) => {
    return (
      <div>
        <div class="row px-5">
          <div class="col" style={{ fontSize: "13px" }}>
            {obj.coinType}
            <br />
            <div style={{fontSize:'10px'}}>
            {obj.value1}
            </div>
           
          </div>
          <div class="col text-right text-2" style={{ fontSize: "13px" }}>
            {obj.value2}
            <br />
            <div style={{ fontSize: "10px" }}>{obj.value3}</div>
          </div>
        </div>
        <div
          class="row"
          style={{
            borderBottom: "1px solid gray",
            margin: "1px 20px 20px 25px",
          }}
        ></div>
      </div>
    );
  });
  return (
    <>
      <div className="container bg-white">
        <div className="innercontainerformyvaults">
          <div className="row my-5 mx-3">
            <div className="col">
              <h2 className="text-primary">Gadgets and Entertainment</h2>
            </div>
            <div className="col">
              <button className="btn btn-outline-primary mx-4 my-2">
                Add a Currency <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="form-outline mx-5">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Searchs"
              aria-label="Search"
            />
          </div>
          <div className="container mt-3">{data}</div>
        </div>
      </div>
    </>
  );
};

export default GadgetsAndEntertainment;
