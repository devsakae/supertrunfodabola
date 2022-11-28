import React, { Component } from 'react';
import teste from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      noDeleteButton, delCard } = this.props;
    return (
      <div className="preview">
        <div className="cardcontainer">
          { !noDeleteButton && (
            <button
              name={ cardName }
              type="button"
              hidden={ noDeleteButton }
              onClick={ delCard }
            >
              Excluir
            </button>) }
          <div className="cover-photo">
            <img
              src={ cardImage }
              className="profile"
              alt={ cardName }
            />
          </div>

          <div className="profile-name" data-testid="name-card">{ cardName }</div>
          <div className="rarity">
            { cardTrunfo && <p className="st" data-testid="trunfo-card">Super Trunfo</p> }
            <p className={ cardRare }>
              { cardRare }
            </p>
          </div>
          <p className="about">{ cardDescription }</p>

          <div className="attr">
            <p className="points">
              { cardAttr1 }
              { ' ⚽ decisão' }
            </p>
            <p className="points">
              { cardAttr2 }
              { ' 👀 malandragem' }
            </p>
            <p className="points">
              { cardAttr3 }
              { ' 🍥 firula' }
            </p>
          </div>
        </div>
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
  hasTrunfo: teste.bool,
}.isRequired;
