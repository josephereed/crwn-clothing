import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selectors'
 
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)
