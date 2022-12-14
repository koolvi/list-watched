import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import colors from '../../colors';


const MainButton = (props) => {
  const {
    classes,
    disabled = false,
    variant = 'contained',
    size = 'small',
    text = 'Далее',
    color = '',
    ...rest
  } = props;

  return (
    <div className={classes.conteiner}>
      <ButtonMUI
        variant={variant}
        size={size}
        className={classes.button}
        color={color}
        disabled={disabled}
        // disabled={false}
        {...rest}
      >
        {text}
      </ButtonMUI>
    </div>
  );
};

const styles = {
  conteiner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '70%',
    height: '50px',
    borderRadius: '5px',
    // background: '#0089c4',
    background: colors.PRIMARY,
    color: 'white',
    fontSize: '15px',
  },
};

export default withStyles(styles)(MainButton);
