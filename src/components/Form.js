import React, { Component } from 'react';
import teste from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange, hasTrunfo,
      onSaveButtonClick } = this.props;
    return (
      <>
        <h1>Crie sua carta</h1>
        <form>
          <label htmlFor="cardName">
            Nome:
            <input
              id="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem:
            <input
              id="cardImage"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição:
            <textarea
              id="cardDescription"
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Decisão:
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              min="0"
              max="90"
              placeholder="0"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Malandragem:
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              min="0"
              max="90"
              placeholder="0"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Firula:
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              min="0"
              max="90"
              placeholder="0"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          { hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
            : (
              <label htmlFor="cardTrunfo" className="superTrunfoSelect">
                <input
                  id="cardTrunfo"
                  type="checkbox"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trunfo
              </label>
            )}
          <button
            type="button"
            name="isSaveButtonDisabled"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  cardName: teste.string,
  cardDescription: teste.string,
  cardAttr1: teste.string,
  cardAttr2: teste.string,
  cardAttr3: teste.string,
  cardImage: teste.string,
  cardRare: teste.string,
  cardTrunfo: teste.bool,
  hasTrunfo: teste.bool,
}.isRequired;
