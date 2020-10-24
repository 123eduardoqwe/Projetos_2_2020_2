import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper, ButtonBase } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1vw',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '50vw'
  },
  image: {
    width: '7vw',
    height: '7vw',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={{ cursor: 'pointer' }}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={this.state.data.img} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.state.data.location}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {this.state.data.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {this.state.data.user}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="caption">{this.state.data.departureDate} <i class="fa fa-long-arrow-right"></i> {this.state.data.returnDate}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Entry);