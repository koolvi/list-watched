import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@mui/icons-material/Check';
import MediumButton from './buttons/MediumButton';
import colors from '../colors';


const MovieCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div className={classes.number_name_status_rating}>
        <div className={classes.number_name_status}>
          <div className={classes.number_name}>
            <div className={classes.number}>1.</div>
            <div className={classes.name}>Название фильма</div>
          </div>
          <div className={classes.status}>
            <CheckIcon style={{color: colors.STATUS_CHECK_ICON_TEXT, margin: '0px 10px 0px 10px'}}/>
            Просмотрено
          </div>
        </div>
        {/* <div className={classes.choose_btn}>
          <MediumButton />
        </div> */}
        {/* НЕ УДАЛЯЙ */}
        <div className={classes.rating}>10</div>
      </div>
      <div className={classes.text_duration}>
        <div className={classes.text}>Потрачено </div>
        {/* duration - длительность */}
        <div className={classes.duration}>1ч 25мин</div>
      </div>
      <div className={classes.text}>
        Комментарий
      </div>
      <div className={classes.comment}>
        С учётом сложившейся международной обстановки, современная методология. С учётом сложившейся международной обстановки, современная методологи
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    margin: '7px 15px 10px 15px',
    background: '#F1F1F1',
    padding: '15px',
    borderRadius: '10px',
  },
  
  number_name_status_rating: {
    display: 'flex',
    flexDirection: 'row',
  },
    number_name_status: {
      display: 'flex',
      flexDirection: 'column',
      width: '85%',
    },
      number_name: {
        display: 'flex',
        flexDirection: 'row',
      },
        number: {
          color: colors.PRIMARY,
          marginRight: '10px',
          fontWeight: 600,
          fontSize: '17px',
        },
        name: {
          fontWeight: 500,
          fontSize: '17px',
        },
      status: {
        background: colors.STATUS_CHECK_BACKGROUND,
        borderRadius: '10px',
        marginTop: '5px',
        marginBottom: '5px',
        color: colors.STATUS_CHECK_ICON_TEXT,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '170px',
        height: '30px',
      },
    rating: {
      marginTop: '5px',
      border: `5px solid ${colors.RATING_LIKE}`,
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      marginLeft: '10px',
    },
    choose_btn: {
      marginLeft: '10px',
    },
  text_duration: {
    display: 'flex',
    flexDirection: 'row',
  },
    text: {
      color: colors.SECONDARY,
      marginRight: '10px',
      fontSize: '14px',
      marginTop: '5px',
    },
    duration: {
      fontSize: '14px',
      marginTop: '5px',
    },
  comment: {
    fontSize: '14px',
  },  
};

export default withStyles(styles)(MovieCard);
