import './style.css';
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: parseFloat(value) || 0,
    });
  };

  handleOperation = (operation) => {
    const { num1, num2 } = this.state;
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '^':
        result = Math.pow(num1, num2);
        break;
      case '√':
        result = Math.sqrt(num1);
        break;
      default:
        break;
    }

    this.setState({
      result,
    });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div className='calc'>
        <input className='inp'
          type="number"
          name="num1"
          value={num1 === 0 ? '' : num1}
          onChange={this.handleChange}
        />
        <input className='inp'
          type="number"
          name="num2"
          value={num2 === 0 ? '' : num2}
          onChange={this.handleChange}
        />

        <br />

        <button className='but' id='btn-1' onClick={() => this.handleOperation('+')}><h4><b>+</b></h4></button>
        <button className='but' id='btn-2' onClick={() => this.handleOperation('-')}><h4><b>-</b></h4></button>
        <button className='but' id='btn-3' onClick={() => this.handleOperation('*')}><h4><b>*</b></h4></button>
        <button className='but' id='btn-4' onClick={() => this.handleOperation('/')}><h4><b>/</b></h4></button>
        <button className='but' id='btn-5' onClick={() => this.handleOperation('^')}><h4><b>^</b></h4></button>
        <button className='but' id='btn-6' onClick={() => this.handleOperation('√')}><h4><b>√</b></h4></button>

        <br />

        <p className='rst'><h1>Result: {result}</h1></p>
      </div>
    );
  }
}

export default Calculator;

