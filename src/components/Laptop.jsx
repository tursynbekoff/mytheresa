import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptop = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    requestLaptop();
  }, []);

  async function requestLaptop() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setLaptop(json.laptops);
  }

  let data = laptop;

  let params = new URLSearchParams(document.location.search);
  let id = params.get("id"); // is the string "Jonathan"
  const data1 = laptop[id];
  console.log( data1)

  return (

    <>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
    <div>
        {'/n'}
    </div>
      <div>
        here is your laptop 
        {/* { (laptop[id]) } */}
      </div>
    </>
  )



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
  // const params = useParams();

  return (
    <ErrorBoundary>
      <Laptop />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
