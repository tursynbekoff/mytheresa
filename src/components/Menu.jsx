import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    
    return (
      <div className="carousel">
        <div className="card">
          <picture>
            <source srcset={data[active].image.replace(".jpg", ".webp")} type="image/webp"></source>
            <img data-testid="hero" className="hero" src={data[active].image} alt={data[active].link} />
          </picture>
          <Link className="link" to={`/${data[active].link}`} >
            {data[active].id} {" "} <i className="arrow right"></i>
          </Link>
        </div>
        <div className="carousel-smaller">
        
          {Object.keys(data).map((item, index) => (
            // eslint-disable-next-line
            <picture>
              <source srcset={data[item].image.replace(".jpg", ".webp")} type="image/webp"></source>
              <img
                data-testid={`thumbnail${index}`}
                key={data[item].image}
                src={data[item].image}
                className={`thumbnail ${index === active ? "active" : ""}`}
                alt={data[item].link}
                onClick={this.handleIndexClick}
                data-index={index}
              />
            </picture>
          ))}
        </div>
      </div>
    );

  }
}

export default Menu;