import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.jsx";

class Laptop extends Component {
  state = { loading: true, };

  async componentDidMount() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.laptops[this.props.params.id - 1]));
  }

  render() {
    const data = this.state;
    console.log(data.name);

    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div className="laptop">
        <img
          // data-testid={`thumbnail${index}`}
          key={data.image[0]}
          src={data.image[0]}
        />
        <article>
          <h2 className="el__title title">
            {data.name}
          </h2>
          <p className="el__text text">
            {data.type},
            {data.cpuModel},
            {data.ramSize},
            {data.memorySize}
          </p>

          <p className="el__price price">
            {data.price} Euro
          </p>
          <button>
            add to basket
          </button>
        </article>

      </div>
    );
  }
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
