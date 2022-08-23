import React, { Component } from 'react';
import teste from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        { cardTrunfo ? <h3>Super Trunfo!</h3> : <br /> }
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <ul>
          <li className="attr" data-testid="attr1-card">
            { cardAttr1 }
          </li>
          <li className="attr" data-testid="attr2-card">
            { cardAttr2 }
          </li>
          <li className="attr" data-testid="attr3-card">
            { cardAttr3 }
          </li>
        </ul>
        <p data-testid="rare-card">
          { cardRare }
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: teste.string,
  cardDescription: teste.string,
  cardAttr1: teste.string,
  cardAttr2: teste.string,
  cardAttr3: teste.string,
  cardImage: teste.string,
  cardRare: teste.string,
  cardTrunfo: teste.bool,
}.isRequired;
