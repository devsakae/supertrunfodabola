import React, { Component } from 'react';
/* import './Form.css'; */

export default class Form extends Component {
  render() {
    return (
      <>
        <h2>Crie sua carta!</h2>
        <form>
          <input
            type="text"
            data-testid="name-input"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
          <input
            type="number"
            data-testid="attr1-input"
          />
          <input
            type="number"
            data-testid="attr2-input"
          />
          <input
            type="number"
            data-testid="attr3-input"
          />
          <input
            type="text"
            data-testid="image-input"
          />
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muirraro">muito raro</option>
          </select>
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
          Super Trunfo
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </>
    );
  }
}
