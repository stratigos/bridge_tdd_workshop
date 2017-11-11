import React, { Component } from 'react';

export default class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialClassName: 'stuff',
      btnClassName: 'stuff',
      inputClassName: 'stuff',
      inputText: '',
      imgTag: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPicture = this.addPicture.bind(this);
  };

  handleChange(event) {
    this.setState({ inputText: event.target.value });

    if (event.target.value.length > 10) {
      this.setState({ inputClassName: this.state.initialClassName + ' red ' });
    } else {
      this.setState({ inputClassName: this.state.initialClassName });
    }
  };

  addPicture() {
    let imgTag = <img
      src="https://i.pinimg.com/originals/c4/dd/5d/c4dd5d671bb86d8551e9697c2d9ece06.gif"
      alt="Nyan Cat" />;

    this.setState({ imgTag: imgTag });
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
          <button
            class={this.state.btnClassName}
            type='button'
            onClick={this.addPicture}
          >DO NOT PRESS THE BUTTON!</button>
        </div>
        <div className='todds-test-img-list-container'>
          <ul className='todds-test-img-list' style={{listStyleType: 'none'}}>
            <li>{this.state.imgTag}</li>
          </ul>
        </div>
      </div>
    );
  };
}
