import React from 'react';
import './form-input.styles.scss';
import PropTypes from 'prop-types';

const FormInput = ({onChange, label, ...otherProps}) => {
  return (
    <div className="group">
      <input type="text" className="form-input" onChange={e => onChange(e)} {...otherProps} />
      {
        label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label> : null
      }
    </div>
  )
}

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default FormInput
