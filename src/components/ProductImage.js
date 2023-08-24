import React from 'react';

function ProductImage({ src, alt }) {
  const imageStyle = {
    width: '200px',
    height: '200px',
    margin: '10px',
  };

  return <img src={require(`../images/${src}`)} alt={alt} style={imageStyle} />;
}

export default ProductImage;
