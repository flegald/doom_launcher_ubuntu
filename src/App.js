import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navigation from './components/navigation';
import IWads from './components/iwads';
import Engines from './components/engines';
import './App.css';
import './styles/custom.css';


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
      wads: [],
      flaggeddWads: [],
      iwad: null,
      engine: null,
      iWadModal: false,
      engineModel: false
    };
    this.processUploadedWad = this.processUploadedWad.bind(this);
    this.removeWads = this.removeWads.bind(this);
    this.resetUpload = this.resetUpload.bind(this)
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

  processUploadedWad(selectorFiles: FileList) {
    if (!selectorFiles){
      return
    }
    var currWads = this.state.wads;
    var newWads = currWads;
    newWads.push([selectorFiles.item(0).name, selectorFiles.item(0).path])
    console.log(newWads);
    this.setState({
      wads: newWads
    })
  }

  resetUpload(target){
    target.value = "";
  }


updateFlaggedWads(options){
  var flagged = [];
  for (var i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      flagged.push(options[i].value);
    }
  }
  this.setState({
    flaggeddWads: flagged
  })
}

  removeWads(){
    var oldWads = this.state.wads;
    var newWads = [];
    for (var wad in oldWads){
      if (!this.state.flaggeddWads.includes(oldWads[wad][1])){
        newWads.push(oldWads[wad])
      }
    }
    this.setState({
      wads: newWads,
      flaggeddWads: []
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
                <Input type="select" name="mods" id="mods" multiple style={ styles.wads } onChange={ (e) => this.updateFlaggedWads(e.target.options) } >
                { this.state.wads.map(wad => {
                  return <option key={wad[0]} value={wad[1]}>{wad[0]}</option>
                })} 
                </Input>
              </FormGroup>
            </Form>
            <span className="btn btn-primary btn-file">
              ADD <input style={{display: "hidden"}} 
                         type="file" 
                         accept=".wad, .pk3, .WAD, .PK3" 
                         onClick={ (e) => this.resetUpload(e.target)} 
                         onChange={ (e) => this.processUploadedWad(e.target.files) }
                    />
            </span>
            <Button color="secondary" style={ styles.modButtons } onClick={this.removeWads} >Remove</Button>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label for="iwads">IWADS</Label>
                <Input type="select" name="iwads" id="iwads" multiple style={ styles.iwads } >
                </Input>
                <Label for="engines">Engines</Label>
                <Input type="select" name="engines" id="engines" multiple style={ styles.iwads }>
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
