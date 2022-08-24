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
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const v = (type === 'checkbox') ? checked : value;
    this.setState({
      [name]: v,
    }, () => {
      let block = false;
      let check1 = true;
      let check2 = true;
      let check3 = true;
      let check4 = true;
      let check5 = true;
      const limite = 210;
      if (cardName.length === 0) check1 = false;
      if (cardDescription.length === 0) check2 = false;
      if (cardImage.length === 0) check3 = false;
      if ((Number(cardAttr1) < 0) || (Number(cardAttr2) < 0) || (Number(cardAttr3) < 0)) check4 = false;
      if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > limite) check5 = false;
      if (!check1 || !check2 || !check3 || !check4 || !check5) block = true;
      this.setState({
        isSaveButtonDisabled: block,
      });
    });
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
