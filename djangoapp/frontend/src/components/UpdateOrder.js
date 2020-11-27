import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function UpdateOrder(props) {
    // const [customer, setCustomer] = useState('')
    // const [product, setProduct] = useState('')
    const [status, setStatus] = useState('')

    function updateOrder(e) {
        e.preventDefault()
        axios.put(`http://127.0.0.1:8000/order-update/${props.id}/`, {
            // customer,
            // product,
            status
        })
            .then(res => {
                console.log(res)
                window.location.reload();
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
                    Update Your Order
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Customer:</Form.Label>
                        <Form.Control as="select" onChange={(e) => setCustomer(e.target.value)}>
                            <option selected value> -- select an option -- </option>
                            {props.customers.map(name => (
                                <option>{name.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Product:</Form.Label>
                        <Form.Control as="select" onChange={(e) => setProduct(e.target.value)}>
                            <option selected value> -- select an option -- </option>
                            {props.products.map(product => (
                                <option>{product.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group> */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Status:</Form.Label>
                        <Form.Control as="select" onChange={(e) => setStatus(e.target.value)}>
                            <option selected value> -- select an option -- </option>
                            <option>Pending</option>
                            <option>Out for delivery</option>
                            <option>Delivered</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="button" onClick={(e) => { updateOrder(e) }} variant="primary" type="submit">
                    Update
                            </Button>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateOrder;
