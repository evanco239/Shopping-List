import React, { Component } from "react";
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Form,
  FormGroup
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    };
    // add item via add item action
    this.props.addItem(newItem);
    this.toggle();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="mb-3">
        <Button color="dark" onClick={this.toggle}>
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add an Item to The List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Enter Item Below:</Label>
                <Input
                  type="text"
                  id="item"
                  placeholder="Add item..."
                  name="name"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
            <Button color="dark" block onClick={this.onSubmit}>
              Add Item
            </Button>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
