import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import CardContextProvider from './contexts/CardContext';
import Card from './components/Card';

function App() {
  return (
    <Container maxWidth="md">
      <CardContextProvider>
        <Card />
      </CardContextProvider>
    </Container>
  );
}

export default App;
