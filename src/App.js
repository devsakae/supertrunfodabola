import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo by Sakae</h1>
        <div className="container">
          <Form />
          <Card
            cardName=""
            cardDescription=""
            cardAttr1=""
            cardAttr2=""
            cardAttr3=""
            cardImage=""
            cardRare=""
            cardTrunfo=""
            hasTrunfo=""
            isSaveButtonDisabled=""
            onInputChange=""
            onSaveButtonClick=""
          />
        </div>
      </div>
    );
  }
}

export default App;
