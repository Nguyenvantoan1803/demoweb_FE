import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
class ModalComponents extends Component {
    constructor(props){
        super(props);
        this.state={
           isshow:false
        }
    }

    componentDidMount() {
    }
    toggle=()=>{
        this.props.open();
    }

    render() {
        console.log("123",this.props)
        return (
      <Modal show={this.props.show} onClick={()=>{this.toggle()}} className="abc" onHide={this.close}>
        <Modal.Header toggle ={()=>{this.toggle()}}>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text'/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text'/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type='text'/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control type='number'/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
              <title>Gender</title>
              <option value="1">Gird</option>
              <option value="2">Boy</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.toggle()}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.toggle()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponents);
