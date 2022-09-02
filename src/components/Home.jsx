import { Component } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu.jsx";

class Home extends Component {
  state = { loading: true, };

  async componentDidMount() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json));
  }

  render() {

    const data = this.state.categories;

    console.log(data);


    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div className="details">
        <Menu  data={ data }/>
      </div>
    );
  }
}

export default Home;
