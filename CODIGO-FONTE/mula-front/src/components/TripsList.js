import React from 'react';
import Entry from './Entry';
import { withStyles } from "@material-ui/core/styles";

const fetch = require('node-fetch');

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '100vw'
  }
});

class TripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <p>Loadubgs</p>
    };
  }

  componentDidMount() {
    fetch('https://mula-back.vercel.app/api/getTrips')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data = data.map(a => <Entry data={a} />);
        return this.setState({ content: data })
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.content}
      </div>
    );
  }
}

export default withStyles(styles)(TripsList);