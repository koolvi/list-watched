import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainButton from '../components/buttons/MainButton';
import IconButton from '../components/buttons/IconButton';


const Movies = (props) => {
    const { classes, onClickBack } = props;

    return (
      <div className={classes.container}>
        Фильмы
        <MainButton
            text='Назад'
            onClick={() => onClickBack(0)}
        />
        <IconButton onClickBack={() => onClickBack(0)}/>
      </div>
    );
  }

const styles = {
  container: {
    height: '100%',
    background: 'green',
  },
};

export default withStyles(styles)(Movies);
