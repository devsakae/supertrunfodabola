import React, { Component } from 'react';
import teste from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, isSaveButtonDisabled, onInputChange, hasTrunfo, cardTrunfo,
      onSaveButtonClick } = this.props;
    const MAX_SKILLS_POINT = 210;
    return (
      <form>
        <h2>Crie sua carta</h2>
        <input
          id="cardName"
          type="text"
          value={ cardName }
          name="cardName"
          placeholder="Nome"
          onChange={ onInputChange }
        />
        <input
          id="cardImage"
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          placeholder="Link da imagem (eg: http://www.pudim.com.br)"
        />
        <textarea
          id="cardDescription"
          name="cardDescription"
          rows="10"
          value={ cardDescription }
          placeholder="Descrição"
          onChange={ onInputChange }
        />

        <div className="row">
          <div className="sk">
            Pontos
            <span className="totalskills">
              { MAX_SKILLS_POINT - cardAttr1 - cardAttr2 - cardAttr3 }
            </span>
          </div>
          <div className="sk">
            Decisão
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              min="0"
              max="90"
              placeholder="0-90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </div>

          <div className="sk">
            Malandragem
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              min="0"
              max="90"
              placeholder="0-90"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </div>
          <div className="sk">
            Firula
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              min="0"
              max="90"
              placeholder="0-90"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div className="strarity">
          <div className="stline">
            Raridade:
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>
          <div className="stline">
            { hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
              : (
                <label htmlFor="cardTrunfo">
                  <input
                    id="cardTrunfo"
                    type="checkbox"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  <span className="cardTrunfo">
                    Super Trunfo
                  </span>
                </label>
              )}
          </div>
        </div>
        <button
          className="css-button-sliding-to-left--grey:hover"
          type="button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
