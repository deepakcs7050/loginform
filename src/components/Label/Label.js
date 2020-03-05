import React from 'react';
import { withStyles } from '@material-ui/core';
import { input as inputTheme, font as fontTheme } from '../../utils/theme';
import InputLabel from "@material-ui/core/InputLabel";


const Label = ({ label, mb }) => {
  const StyledInputLabel = withStyles({
    root: {
      width: '100%',
      fontFamily: 'Montserrat',
      fontWeight: '500',
      color: inputTheme.dark,
      marginBottom: mb,
      fontSize: fontTheme.small,
    },
  })(InputLabel);

    return(
      <StyledInputLabel>
        {label}
      </StyledInputLabel>
    )
}

export default Label;