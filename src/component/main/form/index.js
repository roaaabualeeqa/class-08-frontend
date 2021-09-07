import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class index extends Component {
  render() {
    return (
      <Form onSubmit = {this.props.onSubmit}>
        <Form.Group className="mb-3" controlId="searchKey">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Car, Animal, Exams ......" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default index;