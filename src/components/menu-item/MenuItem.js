import React from 'react';
import './menu-item.styles.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ title, img, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default MenuItem;
