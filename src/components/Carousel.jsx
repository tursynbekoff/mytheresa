import React, { Component } from "react";

class Carousel extends Component {
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
    const { images } = this.props;
    return (
      <div className="carousel">
        <div className="carousel__hero-wrapper">
          <picture>
            <source srcSet={images[active].replace(".jpg", ".webp")} type="image/webp"></source>
            <img data-testid="hero" className="hero" src={images[active].image} alt={images[active].link} />
          </picture>
        </div>
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <picture key={photo.image}>
              <source srcSet={photo.replace("upload", "upload/w_200").replace(".jpg", ".webp")} type="image/webp"></source>
              <img
                data-testid={`thumbnail${index}`}
                src={photo.replace("upload", "upload/w_200")}
                className={`thumbnail ${index === active ? "active" : ""}`}
                alt={`carousel element ${index}`}
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

export default Carousel;