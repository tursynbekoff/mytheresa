import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptop = (props) => {

  const [laptop, setLaptop] = useState([]);

   async function requestLaptops() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json().laptops);

    setLaptop(json.laptops);
  }

  const data = laptop;

  let { laptopId } = useParams();

  console.log("at :", laptopId)
  console.log("windows :", window.location)

  // return (
  //   <div className="laptop">
  //     <img
  //       // data-testid={`thumbnail${index}`}
  //       key={data.image[0]}
  //       src={data.image[0]}
  //     />
  //     <article>
  //       <h2 className="el__title title">
  //         {data.name}
  //       </h2>
  //       <p className="el__text text">
  //         {data.type},
  //         {data.cpuModel},
  //         {data.ramSize},
  //         {data.memorySize}
  //       </p>

  //       <p className="el__price price">
  //         {data.price} Euro
  //       </p>
  //       <button>
  //         add to basket
  //       </button>
  //     </article>

  //   </div>
  // );
}

const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Laptop params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
