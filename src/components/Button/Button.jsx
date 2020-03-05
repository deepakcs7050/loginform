import React, {useState} from 'react';
import MUButton from '@material-ui/core/Button';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { button as buttonTheme, font as fontTheme } from  "../utils/theme";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		borderRadius: '20px',
		border: `solid 2px ${buttonTheme.primary}`,
		height: '50px',
		width: props => props.width || '100%',
		fontFamily: 'Metropolis-Bold',
		fontSize: fontTheme.normal,
		whiteSpace: 'nowrap',
		overflow: 'hidden',	
	},
	primary: {
		background: buttonTheme.primary,
        color: buttonTheme.secondary,
        "&:hover": {
            boxShadow:`0 6px 0 0 ${buttonTheme.dark}`,
            background: buttonTheme.primary,
            color: buttonTheme.secondary
        }
	},
	secondary: {
		background: buttonTheme.secondary,
        color: buttonTheme.primary,
        "&:hover": {
            boxShadow:`0 4px 0 0 ${buttonTheme.primary}`,
            backgroundColor: buttonTheme.secondary
        }
    },
    secondaryDisabled: {
        background: buttonTheme.secondaryDisabled,
        boxShadow: 'none',
        border: 'none',
        color: `${buttonTheme.secondary} !important`
    },
    primaryDisabled: {
        background: buttonTheme.secondary,
		border: `solid 2px ${buttonTheme.primaryDisabled}`,
        color: `${buttonTheme.primaryDisabled} !important`
	},
	text: {
		color: buttonTheme.primary,
		background: 'none',
		cursor: 'pointer',
		userSelect: 'none',
		fontSize: fontTheme.small,
		display: 'flex',
		fontWeight:'bold',
		alignItems: 'center',
		fontFamily: 'Metropolis-Bold',
		"&:hover": {
			color: buttonTheme.textHover,
		}
	},
	textLarge: {
		fontSize: fontTheme.normal,
	},
	textSecondary: {
		color: buttonTheme.secondary
    },selectedPrimary: {
        backgroundColor: `${buttonTheme.primarySelected} !important`
    },selectedSecondary: {
        backgroundColor: `${buttonTheme.secondarySelected} !important`
	},
	icon: {
		color: props => !props.secondary ? buttonTheme.secondary : buttonTheme.primary,
	},
	textIcon: {
		color: buttonTheme.primary,
		fontSize: props => props.large ? fontTheme.normal : fontTheme.small,
		"&:hover": {
			color: buttonTheme.textHover,
		}
	},
	rightIcon: {
		marginLeft: '5px',
	},
	leftIcon: {
		marginRight: '5px',
	},
	
});
const Button = ({
	secondary = false,
	text = false,
	style,
	value,
	children,
    large = false,
    disabled = false,
	onClick,
	right = false,
	left = false,
	icon,
	width,
}) => {
    const [clicked, setClicked] = useState(false);
    const classes = useStyles({secondary, large, width});
	if (text) {
		return (
			<div onClick={onClick} style={style} className={clsx(classes.text, large && classes.textLarge)}>
				{icon && <div className={`${classes.textIcon} ${classes.leftIcon}`}>{<i className="fas fa-arrow-left"></i>}</div>}
				{children || value}
			</div>
		);
	}
	return (
		<MUButton
			className={clsx(
                classes.root,
				secondary ? disabled ? classes.secondaryDisabled : classes.secondary : disabled ? classes.primaryDisabled : classes.primary,
                clicked ? secondary ? classes.selectedSecondary :classes.selectedPrimary  : null
 			)}
            style={style}
            disableRipple={true}
            onClick={onClick}
            onMouseDown={()=>setClicked(true)}
            onMouseUp={()=>setClicked(false)}
            disabled={disabled}
		>
			{left && <i className={`fas fa-angle-left ${classes.icon} ${classes.leftIcon}`} />}
			{children || value}
			{right && <i className={`fas fa-angle-right ${classes.icon} ${classes.rightIcon}`} />}
		</MUButton>
	);
};
Button.prototype = {
	style: PropTypes.object,
	secondary: PropTypes.bool,
	text: PropTypes.bool,
	value: PropTypes.string,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	onClick: PropTypes.func
};
export default Button;
