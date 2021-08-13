import React from "react";
import Balance from "./Balance";
import MyVaults from "./MyVaults";
import Gadgetsandentertainment from "./GadgetsAndEntertainment";
const Vaults = () => {
  return (
    <div className="container" style={{marginTop:'100px'}}>
      <div className="row">
        <div className="col">
          <Balance />
        </div>
      </div>
      <div className="row" >
        <div className="col-md-4" >
          <MyVaults />
        </div>
        <div className="col-md-8">
          <Gadgetsandentertainment />
        </div>
      </div>
    </div>
  );
};

export default Vaults;
