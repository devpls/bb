import React from 'react';
import { string } from 'prop-types';
import { BEMHelper } from '@app/utils/bemHelper';
import './Card.scss';

const classes = new BEMHelper('card');

export const Card = ({ title, description, image }) => {
  return (
    <div className={classes('')}>
      <h2 className={classes('title')}>{title}</h2>
      <div className={classes('content')}>
        <div className={classes('image')}>
          <img src={image} alt={title} />
        </div>
        <p className={classes('description')} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
};
