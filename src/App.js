import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const { isSaveButtonDisabled, cardName, cardImage,
      cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const v = (type === 'checkbox') ? checked : value;
    this.setState({
      [name]: v,
    });
    if (isSaveButtonDisabled) {
      let check1 = false;
      let check2 = false;
      let check3 = false;
      let check4 = false;
      if (cardName.length >= 1) check1 = cardName.length;
      if (cardDescription.length >= 1) check2 = cardName.length;
      if (cardImage.length >= 1) check3 = cardName.length;
      const soma = cardAttr1 + cardAttr2 + cardAttr3;
      const limite = 210;
      if (soma >= 0 && soma <= limite) check4 = true;
      if (check1 && check2 && check3 && check4) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      }
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <center><h1>Super Trunfo da Bola</h1></center>
        <div className="container">
          <div className="criesuacarta">
            <Form
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
          <div className="criesuacarta">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
