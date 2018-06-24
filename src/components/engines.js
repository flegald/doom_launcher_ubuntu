import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Engines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      engines: [],
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    }, function(){
    	this.props.showEngineModel()
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Source Ports</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="select" name="enginesSelect" id="enginesSelect" multiple >
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
              <span className="btn btn-primary btn-file">
              ADD <input style={{display: "hidden"}} 
                         type="file" 
                         accept=".wad, .pk3, .WAD, .PK3" 
                         onClick={ (e) => this.resetUpload(e.target)} 
                         onChange={ (e) => this.processUploadedWad(e.target.files) }
                    />
            </span>
            <Button color="secondary">Remove</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}