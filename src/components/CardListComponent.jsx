import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { CardContext } from '../contexts/CardContext';
import { Action } from '../reducers/CardReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.transparent,
  },
  marked: {
    textDecoration: 'line-through',
  },
}));

const CardListComponent = () => {
  const { cards, dispatch } = useContext(CardContext);

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {cards.map((card) => {
        return (
          <ListItem key={card.id} role={undefined} dense button>
            <ListItemText primary={card.name} className={card.isChecked ? classes.marked : ''} />
            <ListItemText primary={card.title} className={card.isChecked ? classes.marked : ''} />
            <ListItemText primary={card.company} className={card.isChecked ? classes.marked : ''} />
            <ListItemText primary={card.contact} className={card.isChecked ? classes.marked : ''} />
            <ListItemText primary={card.address} className={card.isChecked ? classes.marked : ''} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => {
                  dispatch({
                    type: Action.REMOVE_CARD,
                    id: card.id,
                  });
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CardListComponent;
