import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import colors from '../../colors';


const MediumButton = (props) => {
  const {
    classes,
    disabled = false,
    variant = 'contained',
    size = 'small',
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
        style={{ fontSize: '12px' }}
        // disabled={false}
        {...rest}
      >
        Выбрать
      </ButtonMUI>
    </div>
  );
};

const styles = {
  conteiner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  button: {
    width: '80px',
    height: '30px',
    borderRadius: '5px',
    // background: '#0089c4',
    background: colors.PRIMARY,
    color: 'white',
    fontSize: '15px',
  },
};

export default withStyles(styles)(MediumButton);
