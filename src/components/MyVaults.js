import React, { useState } from "react";

const MyVaults = () => {
  const [state, setstate] = useState([
    {
      title: "Vault 1",
    },
    {
      title: "Vault 2",
    },
    {
      title: "Vault 3",
    },
    {
      title: "Vault 4",
    },
    {
      title: "Vault 5",
    },
    {
      title: "Vault 6",
    },
    {
      title: "Vault 7",
    },
    {
      title: "Vault 8",
    },
    {
      title: "Vault 9",
    },
    {
      title: "Vault 10",
    },
  ]);
  const data = state.map((obj) => {
    return (
      <div
        className="row text-white px-3 border-bottom mt-3"
      >
        <div className="col-6">{obj.title}</div>
        <div className="col-2">
          <p>$0</p>
        </div>
        <div className="col-2">
          <img
            src="https://img.icons8.com/ios/50/000000/page-down-button.png"
            style={{ height: "20px", width: "auto" }}
          />
        </div>
        <div className="col-1"><i class="fas fa-ellipsis-h"></i></div>
      </div>
    );
  });
  return (
    <>
      <div className="container rounded" >
        <div
          className="innercontainerformyvaults"
          style={{
            background:'rebeccapurple'
          }}
        >
          <div className="row my-5 mx-3">
            <div className="col">
              <h1 className="text-white">My Vaults</h1>
            </div>
            <div className="col">
              <button className="btn btn-outline-light mx-4 my-2">
                Add Vaults <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div class="form-outline mx-4">
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="Searchs"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="container mt-3">{data}</div>
        </div>
      </div>
    </>
  );
};

export default MyVaults;