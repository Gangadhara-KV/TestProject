import React      from 'react';
import PropTypes  from 'prop-types';

import Label      from '../../Atoms/Label/Label';
import Input      from '../../Atoms/Input/Input';

require('./_style.scss');

const LabeledInput = props => (
  <div className="m__labeled_input">
    <Label text={props.label} />
    <Input value="" placeholder={props.placeholder} type="text" />
  </div>
);

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default LabeledInput;
