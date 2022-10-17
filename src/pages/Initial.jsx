import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainButton from '../components/buttons/MainButton';


class Initial extends Component {

  render() {
    const { classes, onClickBack } = this.props;

    return (
      <div className={classes.container}>
        <h1 className={classes.header}>СМОТРЕЛА<br/>СМОТРЮ<br/>БУДУ СМОТРЕТЬ</h1>
        <div className={classes.buttons}>
          <MainButton
            text='Фильмы'
            onClick={() => onClickBack(1)}
          />
          <MainButton
            text='Сериалы'
            onClick={() => onClickBack(2)}
          />
        </div>
        <p className={classes.text}>Учет фильмов и сериалов, которые уже просмотрены,
          <br/> еще в процессе или отложены на потом</p>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  header: {
    fontSize: '33px',
    textAlign: 'center',
    paddingTop: '60px',
    paddingBottom: '60px',
    lineHeight: '1.5',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    height: '130px',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: '12px',
    color: 'gray',
    textAlign: 'center',
    paddingBottom: '20px',
    lineHeight: '2',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
};

export default withStyles(styles)(Initial);
