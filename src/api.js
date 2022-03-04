const testUrl = 'http://localhost:65432/api/card';
const prodUrl = 'http://localhost:65123/api/card';

const url = process.env.NODE_ENV === 'production' ? prodUrl : testUrl
console.log("Current env", process.env.NODE_ENV);

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
