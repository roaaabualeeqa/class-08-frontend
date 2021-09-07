import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './card.scss';

class index extends Component {
  render() {
    return (
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={this.props.item.thumb} />
        <Card.Body>
          <Card.Text>
            {this.props.item.bio}
          </Card.Text>
          <a href={this.props.item.fullUrl} target="_blank">Go somewhere</a>
        </Card.Body>
      </Card>
    );
  }
}

export default index;