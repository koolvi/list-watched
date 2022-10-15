import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainButton from '../components/buttons/MainButton';


class Series extends Component {

  render() {
    const { classes, onClickBack } = this.props;

    return (
      <div className={classes.container}>
        Сериалы
        <MainButton
            text='Назад'
            onClick={() => onClickBack(0)}
          />
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    background: 'yeloow',
  },
};

export default withStyles(styles)(Series);
