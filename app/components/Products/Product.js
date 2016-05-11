import React from 'react';
import { Card, CardHeader, CardText, CardTitle, CardMedia } from 'material-ui/Card';

import styles from './Product/styles';

const noImage = require('../../img/No-image-found.jpg');

const product = (params) => {
  const { product } = params;
  return <Card>
    <CardHeader
      title={product.name}
      subtitle={product.tag}
      avatar={product.previewImage}
    />
    <CardMedia>
      <div className='card-image-wrap'>
        <img src={product.image || noImage} style={styles.image} />
      </div>
    </CardMedia>
    <CardTitle
      title='Product information'
      subtitle={product.name}
    />
    <CardText className='text-justify'>
      {product.description}
    </CardText>
  </Card>;
};

export default product;
