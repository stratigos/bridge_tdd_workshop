import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    return(
      <div className='todds-test-input-container'>
        <input type='text' name='todds-test-input' placeholder='type stuff here!' />
      </div>
    );
  }
}
