import React from 'react';
import TripsList from './components/TripsList';
import NewEntry from './components/NewEntry';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const fetch = require('node-fetch');

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      text: '',
      body: <TripsList />,
      isNew: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
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

  handleLogoClick() {
    alert(1);
  }

  handleAddClick() {
    this.state.isNew = !this.state.isNew;
    return this.setState({ body: this.state.isNew ? <NewEntry /> : <TripsList /> });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={this.handleLogoClick}>
              Mula
            </Typography>
            <div className={classes.title} ></div>
            <Button color="inherit" onClick={this.handleAddClick}>
            <i class="fa fa-plus-circle"></i>
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          {this.state.body}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);