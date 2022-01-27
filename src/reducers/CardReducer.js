export const Action = {
  ADD_CARD: 'add-card',
  GET_CARDS: 'get-cards',
  REMOVE_CARD: 'remove-card',
};

export const cardReducer = (state, action) => {
  switch (action.type) {
    case Action.ADD_CARD: {
      return [...state, action.card];
    }
    case Action.GET_CARDS: {
      return action.cards;
    }
    case Action.REMOVE_CARD: {
      return state.filter((card) => card.id !== action.id);
    }
    default:
      return state;
  }
};
