import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import AddCardComponent from './AddCardComponent';
import CardListComponent from './CardListComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
}));

const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddCardComponent />
        </Grid>
        <Grid item xs={12}>
          <CardListComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
