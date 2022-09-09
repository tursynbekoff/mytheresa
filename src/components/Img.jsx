

import React from "react";

const Img = ({src, alt}) => {

  return (
    <picture>
      <source srcSet={src.replace(".jpg", ".webp")} type="image/webp"></source>
      <img data-testid="hero" className="hero" src={src} alt={alt} />
    </picture>
  )
}

export default Img
