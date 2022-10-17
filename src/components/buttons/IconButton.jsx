import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import IconButtonMUI from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';


const IconButton = (props) => {
  const { onClickBack, style } = props;
  return (
    <div>
      <IconButtonMUI  onClick={() => console.log(123)} aria-label="delete" style={style}>
        <ArrowBackIcon onClick={() => onClickBack()}/>
      </IconButtonMUI>
    </div>
  );
};

// export default withStyles(IconButton);
export default IconButton;
