import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections} from '../../redux/selectors/directory.selectors';
import './directory.styles.scss';

import MenuItem from '../menu-item/MenuItem';

const Directory = ({ sections }) => {

  return (
    <div>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
