import React from 'react';
import Entry from './Entry';
import './TripsList.css';

const fetch = require('node-fetch');

class TripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ahow: <p>Loadubgs</p>
    };
  }

  componentDidMount() {
    fetch('https://mula-back.vercel.app/api/getTrips')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data = data.map(a => <Entry data={a}/>);
        return this.setState({ ahow: data })
      });
  }

  render() {
    return (
      <div className="list">
        {this.state.ahow}
      </div>
    );
  }
}

export default TripsList;
