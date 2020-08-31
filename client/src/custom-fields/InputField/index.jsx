import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
const InputField = (props) => {
  const {
    field,
    form,
    type,
    label,
    variant,
    id,
    color,
    defaultValue,
    multiline,
    disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <React.Fragment>
      <TextField
        className='w-100'
        id={id}
        type={type}
        label={label}
        variant={variant}
        color={color}
        disabled={disabled}
        defaultValue={defaultValue}
        multiline={multiline}
        error={showError}
        helperText={showError ? errors[name] : ''}
        {...field}
      />
    </React.Fragment>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  defaultValue: PropTypes.string,
  multiline: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  color: 'secondary',
  id: 'outlined-basic',
  variant: 'outlined',
  multiline: false,
};

export default InputField;
