import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import Card from './card';
import {Row} from 'react-bootstrap'

import './main.scss';

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      // search_term: '',
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    let searchKey = e.target.searchKey.value;
    let url = `http://localhost:3050/photo?search_key=${searchKey}`
    axios
    .get(url)
    .then( result => {
      this.setState({
        photos: result.data
      })
      console.log(this.state.photos)
    })
    .catch( err => console.log(err) )

  }

  render() {
    return (
      <main>
        <Form 
          onSubmit = {this.onSubmit}
        />
        <Row className="justify-content-between">
        {
          this.state.photos.map( item => {
            return <Card item = {item}/>
          })
        }

        </Row>
      </main>
    );
  }
}

export default index;