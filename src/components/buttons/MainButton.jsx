import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';


const MainButton = (props) => {
  const {
    classes,
    disabled = false,
    variant = 'contained',
    size = 'large',
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
    width: '300px',
    height: '61px',
    borderRadius: '50px',
    // background: '#0089c4',
    background: '#00AAA0',
    color: 'white',
    fontSize: '20px',
  },
};

export default withStyles(styles)(MainButton);
