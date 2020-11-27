import { Fragment, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderForm(props) {
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    const [status, setStatus] = useState('')

    function submitOrder(e) {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/order-create/', {
            customer,
            product,
            status
        })
            .then(res => {
                console.log(res);
                setTimeout(() => { window.location.replace('/'); }, 1500)
                toast.success("Order has been placed! 🎉")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Fragment>
            <div class="order-row">
                <div >
                    <div class="card card-body">
                        <h1>🎁 Make someone's day.</h1>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Customer:</Form.Label>
                                <Form.Control as="select" onChange={(e) => setCustomer(e.target.value)}>
                                    <option selected value> -- select an option -- </option>
                                    {props.location.state.customers.map(name => (
                                        <option>{name.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Product:</Form.Label>
                                <Form.Control as="select" onChange={(e) => setProduct(e.target.value)}>
                                    <option selected value> -- select an option -- </option>
                                    {props.location.state.products.map(product => (
                                        <option>{product.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Status:</Form.Label>
                                <Form.Control as="select" onChange={(e) => setStatus(e.target.value)}>
                                    <option selected value> -- select an option -- </option>
                                    <option>Pending</option>
                                    <option>Out for delivery</option>
                                    <option>Delivered</option>
                                </Form.Control>
                            </Form.Group>
                            <Button className="button" onClick={(e) => { submitOrder(e) }} variant="primary" type="submit">
                                Order
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                limit={1} />
        </Fragment>
    );
}

export default OrderForm;
