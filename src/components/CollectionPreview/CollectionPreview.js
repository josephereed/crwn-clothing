import React from 'react';
import { Link } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${title.toLowerCase()}`}><h1 className="title">{title.toUpperCase()}</h1></Link>
      <div className="preview">
        {items.filter((item, index) => index < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
