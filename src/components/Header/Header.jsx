import React from 'react';
import PropTypes from 'prop-types';
import { header as headerTheme, font as fontTheme } from '../utils/theme';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        color: headerTheme.Header,
        fontSize: props => props.fontSize,
        fontFamily: 'Montserrat',
        fontWeight: 800,
    }
});

const Header = ({title, style, fontSize = fontTheme.large, ...props}) => {
    const classes = useStyles({fontSize});

    return (
    <div className={classes.container} {...props} style={style}>
        {title}
    </div>
  );
}

Header.prototype = {
    title: PropTypes.string,
    fontSize: PropTypes.string
}

export default Header;