import React, { Component } from 'react';
import teste from 'prop-types';

export default class Baralho extends Component {
  render() {
    const { savedCards, cardName } = this.props;
    return (
      <div>
        { cardName.map((cartinha) => (
          <div className="">
        )) }
      </div>
    );
  }
}

Baralho.defaultProps = {
  savedCards: [],
};

Baralho.propTypes = {
  savedCards: teste.string,
  cardName: teste.string,
};
