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
                <Input type="select" name="mods" id="mods" multiple >
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" >Add</Button>{' '}
            <Button color="secondary">Remove</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}