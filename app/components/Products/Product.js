import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';

import styles from './Product/styles';

const noImage = require('../../img/No-image-found.jpg');

export default (params) => {
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
