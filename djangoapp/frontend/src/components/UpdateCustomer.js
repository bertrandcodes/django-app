import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function UpdateCustomer(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function createCustomer(e) {
        e.preventDefault()

        axios.put(`http://127.0.0.1:8000/customer-update/${props.id}/`, {
            name,
            email,
            phone
        })
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Customer Info
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="First Name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCell">
                        <Form.Label>Number</Form.Label>
                        <Form.Control placeholder="What's yo #?" onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="button" onClick={(e) => { createCustomer(e) }} variant="primary" type="submit">
                    Update
                </Button>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateCustomer;
