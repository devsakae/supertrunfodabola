import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    noDeleteButton: true,
  };

  componentDidMount() {
    document.title = 'Super Trunfo da Bola';
  }

  checaSaveButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    let block = true;
    let check1 = true;
    let check2 = true;
    let check3 = true;
    const limit1 = 90;
    const limit2 = 210;
    if ((cardName.length === 0) || (cardDescription.length === 0)
    || (cardImage.length === 0)) check1 = false;
    // Refatorado pra usar + ao invés de Number por dica do Felipe Pinto
    if (((+(cardAttr1) < 0) || (+(cardAttr1) > limit1))
    || ((+(cardAttr2) < 0) || (+(cardAttr2) > limit1))
    || ((+(cardAttr3) < 0) || (+(cardAttr3) > limit1))) check2 = false;
    if ((+(cardAttr1) + +(cardAttr2) + +(cardAttr3)) > limit2) check3 = false;
    if (check1 && check2 && check3) block = false;
    this.setState({
      isSaveButtonDisabled: block,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const v = (type === 'checkbox') ? checked : value;
    this.setState({
      [name]: v,
      // Estava com delay de 1 clique, aí o Felipe Pinto disse pra passar no segundo argumento. Deu certo!
    }, () => this.checaSaveButton());
  };

  zeraTudo = () => {
    const { cardTrunfo } = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled: true,
    });
  };

  delCard = (event) => {
    const { savedCards } = this.state;
    const novoArray = savedCards.filter((card) => card.cardName !== event.target.name);
    this.setState({
      savedCards: novoArray,
      hasTrunfo: false,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, savedCards,
      hasTrunfo, noDeleteButton } = this.state;

    return (
      <div>
        <center><h1>Super Trunfo da Bola</h1></center>
        <div className="formenu">
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
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ () => {
              const novoCard = {
                cardName,
                cardImage,
                cardDescription,
                cardAttr1,
                cardAttr2,
                cardAttr3,
                cardRare,
                cardTrunfo,
              };
              savedCards.push(novoCard);
              this.zeraTudo();
            } }
          />
        </div>
        <div className="cards">
          <div className="onlyyou">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              noDeleteButton={ noDeleteButton }
            />
          </div>
          { (savedCards.length > 0) && (
            <>
              <div>
                <h1>Coleção</h1>
              </div>
              <div className="allcards">
                { savedCards?.map((cada) => (
                  <Card
                    key={ cada.cardName }
                    cardName={ cada.cardName }
                    cardDescription={ cada.cardDescription }
                    cardAttr1={ cada.cardAttr1 }
                    cardAttr2={ cada.cardAttr2 }
                    cardAttr3={ cada.cardAttr3 }
                    cardImage={ cada.cardImage }
                    cardRare={ cada.cardRare }
                    cardTrunfo={ cada.cardTrunfo }
                    noDeleteButton={ cada.noDeleteButton }
                    delCard={ this.delCard }
                  />
                ))}
              </div>
            </>
          ) }
          ;
        </div>
      </div>
    );
  }
}

export default App;
