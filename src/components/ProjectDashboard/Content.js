import React from 'react';
import PropTypes from 'prop-types';

//import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

//import { Reg1 } from '../Visuals';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      {/* <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
        </Typography>
      </div> */}
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);