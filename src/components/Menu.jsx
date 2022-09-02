import { Component } from "react";
import React from "react";

class Menu extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://res.cloudinary.com/tursynbekoff/image/upload/v1662125174/no-image-1024x1024.png"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { data } = this.props;
    // console.log(data[active].image);
    
    return (
      <div className="carousel">
        <img data-testid="hero" src={data[active].image} alt="product" />
        <div className="carousel-smaller">
        
          {Object.keys(data).map((item, index) => (
            // eslint-disable-next-line
            <img
              data-testid={`thumbnail${index}`}
              key={data[item].image}
              src={data[item].image}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );

  }
}

export default Menu;