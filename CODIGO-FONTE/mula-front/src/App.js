import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'; 
import './App.css';
import './components/TripsList'
import TripsList from './components/TripsList';

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
        data = data.map(a => <li>{a.data}</li>);
        return this.setState({ value: data })
      });
  }

  handleChange(event) {
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
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Mula
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="howdy">
          <TripsList />
        </div>
      </div>
    );
  }
}

export default App;
