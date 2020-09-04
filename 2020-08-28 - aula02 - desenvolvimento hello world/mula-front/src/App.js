import React from 'react';
const fetch = require('node-fetch');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://mula-back.vercel.app/api')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data = data.map(a => <li>{a.data}</li>);
        return this.setState({ value: data })
      });
  }

  handleChange(event) {
    console.log(event.target);
    return this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    let temp = this.state.value;
    temp.push(<li>{this.state.text}</li>);
    fetch('https://mula-back.vercel.app/api/insert', {
      method: 'post',
      body: JSON.stringify({ 'data': this.state.text }),
      headers: { "Content-Type": "application/json" }
    });
    return this.setState({ value: temp, text: '' });
  }

  render() {
    return (
      <div>
        <header >
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>
            Submit
          </button>
          <ul>{this.state.value}</ul>
        </header>
      </div>
    );
  }
}

export default App;
