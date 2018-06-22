import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navigation from './components/navigation';
import IWads from './components/iwads';
import Engines from './components/engines';
import './App.css';


const styles = {
  wads: {
    height: '40vh'
  },
  iwads: {
    height: '22vh'
  },
  modButtons: {
    margin: '10px'
  },
  launchButton: {
    margin: '30px'
  }
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iWadModal: false,
      engineModel: false
    };
  }

  showIwadModel() {
    this.setState({
      iWadModel: !this.state.iwadModel
    })
  }

  showEngineModel() {
    this.setState({
      engineModel: !this.state.engineModel
    })
  }

  render() {
    return (
      <div className="App">
      < Navigation showIwadModel={this.showIwadModel.bind(this)} showEngineModel={this.showEngineModel.bind(this)} />
      { !this.state.iWadModel ? null : < IWads showIwadModel={this.showIwadModel.bind(this)} />}
      { !this.state.engineModel ? null : < Engines showEngineModel={this.showEngineModel.bind(this)} />}
      <Container>
        <Row> 
          <Col>
            <Form>
              <FormGroup>
                <Label for="mods">WADS / Mods</Label>
                <Input type="select" name="mods" id="mods" multiple style={ styles.wads } >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Form>
            <Button color="primary" style={ styles.modButtons }>Add</Button>
            <Button color="secondary" style={ styles.modButtons }>Remove</Button>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label for="iwads">IWADS</Label>
                <Input type="select" name="iwads" id="iwads" multiple style={ styles.iwads } >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <Label for="engines">Engines</Label>
                <Input type="select" name="engines" id="engines" multiple style={ styles.iwads }>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleText">Custom Args</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            </Col>
          <Col>
            <Button color="success" size="lg" style={ styles.launchButton }>Launch</Button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
