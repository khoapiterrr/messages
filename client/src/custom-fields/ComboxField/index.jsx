import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel } from '@material-ui/core';

const ComboxField = (props) => {
  const { variant, id, label, name } = props;
  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        native
        // value={state}
        label={label}
        inputProps={{
          name: name,
          id: id,
        }}>
        <option aria-label='None' value='' />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
};

ComboxField.propTypes = {
  variant: PropTypes.string,
  id: PropTypes.string,
};

ComboxField.defaultProps = {
  variant: 'outlined',
  id: 'outlined-age-native-simple',
};
export default ComboxField;
