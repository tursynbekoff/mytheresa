import { Component } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";

// import Menu from "./Menu.jsx";

class Laptops extends Component {
  state = { loading: true, };

  async componentDidMount() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json));
  }

  render() {
    const data = this.state.laptops;
    console.log(data)

    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div className="laptops">
        {/* <Menu  data={ data }/> */}

        <div className="laptops__list list">
        
          {Object.keys(data).map((item, index) => (
            <div className="list__el el">
              <img
                data-testid={`thumbnail${index}`}
                key={data[item].image[0]}
                src={data[item].image[0]}
              />
              <article>
                <h2 className="el__title title">
                  {data[item].name}
                </h2>
                <p className="el__text text">
                  {data[item].type},
                  {data[item].cpuModel},
                  {data[item].ramSize},
                  {data[item].memorySize}
                </p>

                <p className="el__price price">
                  {data[item].price} Euro
                </p>
                <button>
                  add to basket
                </button>
              </article>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Laptops params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
