import React, { ReactElement } from 'react';
import ReactImg from 'react-image';

interface IImage {
  src: string,
  spiner?: ReactElement,
  alt: string
}

const defaultImage = '';

export default (image: IImage) => {
  return <ReactImg src={image.src} alt={image.alt} loader={image.spiner} unloader={defaultImage}/>;
}
