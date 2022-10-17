import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainButton from '../components/buttons/MainButton';
import IconButton from '../components/buttons/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import MovieCard from '../components/MovieCard';
import colors from '../colors';


const Movies = (props) => {
    const { classes, onClickBack } = props;

    // модальное окно
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '80px',
      left: '200px',
      // top: '50%',
      // left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 200,
      bgcolor: 'background.paper',
      // border: '2px solid #000',
      borderRadius: '10px',
      boxShadow: 24,
      p: 4,
    };

    return (
      <div className={classes.container}>

        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            12345
          </Box>
        </Modal>

        <div className={classes.headerContainer}>
          <div className={classes.headerIcon}>
            <IconButton
              style={{color: colors.PRIMARY}}
              onClickBack={() => onClickBack(0)}
            />
          </div>
          <div className={classes.header}>
            Фильмы
          </div>
          <div className={classes.menu}>
            <MenuIcon
              style={{color: colors.PRIMARY}}
              onClick={handleOpen}
            />
          </div>
        </div>

        <div className={classes.content}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />

          {/* wasted time - потрачено времени */}
          <div className={classes.wasted_time}>
            <div className={classes.text}>Потрачено на фильмы:</div>
            <div className={classes.time}>2 часа 35 мин</div>
          </div>
        </div>

{/* НЕ УДАЛЯЙ - ЭТО ДЛЯ ПУСТОГО СПИСКА */}
        {/* 
          <div className={classes.emptyList}>
            <p>Список фильмов пуст</p>
            <SentimentNeutralIcon style={{color: '#f0f0f0', width: '50px', height: '50px'}}/>
          </div>
         */}

        <div className={classes.footerContainer}>        
          <MainButton
            text='Добавить'
            // onClick={() => onClickBack(0)}
          />
        </div>
      </div>
    );
  }

const styles = {
  container: {
    height: '100%',
    // background: 'green',
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    display: 'flex',
    // background: 'gray',
    paddingTop: '10px',
    paddingBottom: '10px',
    // marginLeft: '20px',
    boxShadow: '-2px 0px 5px 0px rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    // прижать шапку сверху
    // position: 'fixed',
    // top: '0px',
    width: '100%',
    // 'Z-index: '20',
  },
  headerIcon: {
    paddingLeft: '20px',
  },
  header: {
    marginLeft: '10px',
    fontWeight: 500,
    fontSize: '20px',
    flex: 1,
  },
  menu: {
    paddingRight: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '300px',
    // maxHeight: '700px',
    overflowY: 'scroll', /* Добавляем полосы прокрутки */
    // overflow: 'scroll',
    // flex: 1,
    // width: '100%',
  },
  wasted_time: {
    display: 'flex',
    flexDirection: 'column',
    color: colors.SECONDARY,
    marginTop: '50px',
    marginBottom: '120px',
    alignItems: 'center',
    fontSize: '14px',
  },
  text: {
    // color: colors.SECONDARY,
  },
  time: {},
  emptyList: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.SECONDARY,
  },
  footerContainer: {
    background: 'white',
    paddingTop: '15px',
    paddingBottom: '15px',
    boxShadow: '0px -2px 5px 0px rgba(0, 0, 0, 0.2)',
    // прижать кнопку снизу
    position: 'fixed',
    bottom: '0px',
    width: '100%',
  },
};

export default withStyles(styles)(Movies);
