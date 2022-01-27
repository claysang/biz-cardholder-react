import React, { createContext, useEffect, useReducer } from 'react';
import { getCardReq } from '../api';
import { Action, cardReducer } from '../reducers/CardReducer';

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, dispatch] = useReducer(cardReducer, [
    {
      name: 'Chao',
      title: null,
      company: 'TW',
      contact: '13312345678',
      address: 'XYC',
    },
    {
      name: 'Chao',
      title: null,
      company: 'TW',
      contact: '13312345678',
      address: 'XYC',
    },
  ]);

  useEffect(async () => {
    const cards = await getCardReq();
    dispatch({
      type: Action.GET_CARDS,
      cards,
    });
  }, []);

  return <CardContext.Provider value={{ cards, dispatch }}>{props.children}</CardContext.Provider>;
};
export default CardContextProvider;

CardContextProvider.propTypes = {
  children: React.Component,
};
