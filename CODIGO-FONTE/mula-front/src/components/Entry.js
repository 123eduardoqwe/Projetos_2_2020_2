import React from 'react';
import './Entry.css';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';



class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="entry">
        <Card>
          <CardMedia
            className="entry-img"
            image={this.state.data.img}
            title="howdy"/>
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {this.state.data.user}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {this.state.data.location} - {this.state.data.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {this.state.data.desc}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Entry;
