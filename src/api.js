const url = 'http://localhost:65432/api/card';

export const getCardReq = async () => {
  const res = await fetch(url);
  return await res.json();
};

export const addCardReq = async (card) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
};
