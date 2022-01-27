import React, { useContext, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CardContext } from '../contexts/CardContext';
import { Action } from '../reducers/CardReducer';

import { addCardReq, getCardReq } from '../api';

const AddCardComponent = () => {
  const { dispatch } = useContext(CardContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');

  const onAddCard = async () => {
    await addCardReq({ name, address, company, contact });

    const cards = await getCardReq();
    dispatch({
      type: Action.GET_CARDS,
      cards,
    });

    setContact('');
    setName('');
    setAddress('');
    setCompany('');
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        label="Add Name"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        label="Add address"
        variant="outlined"
        size="small"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <TextField
        label="Add company"
        variant="outlined"
        size="small"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <TextField
        label="Add contact"
        variant="outlined"
        size="small"
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
      <Button variant="outlined" onClick={onAddCard}>
        Outlined
      </Button>
    </Grid>
  );
};

export default AddCardComponent;
