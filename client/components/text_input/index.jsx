import React, { Component } from 'react';

export default class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialClassName: 'stuff',
      btnClassName: 'stuff',
      inputClassName: 'stuff',
      inputText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({ inputText: event.target.value });

    if (event.target.value.length > 10) {
      this.setState({ inputClassName: this.state.initialClassName + ' red ' });
    } else {
      this.setState({ inputClassName: this.state.initialClassName });
    }
  };

  render() {
    return(
      <div className='todds-form-wrapper'>
        <div className='todds-test-input-container'>
          <input
              type='text'
              name='todds-test-input'
              placeholder='type stuff here!'
              class={this.state.inputClassName}
              onChange={this.handleChange}
              value={this.state.inputText}
            />
        </div>
        <div className='todds-test-btn-container'>
          <button class={this.state.btnClassName} type="button">
            DO NOT PRESS THE BUTTON!
          </button>
        </div>
      </div>
    );
  };
}
