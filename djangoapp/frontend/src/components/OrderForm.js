import { Fragment, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function OrderForm(props) {
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    const [status, setStatus] = useState('')

    function submitOrder(e) {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/order-create/', {
            customer: {
                id: 1,
                name: "James",
                phone: "6463549844",
                email: "james@gmail.com",
                date_created: "2020-11-20T09:39:11.820947Z"
            },
            product: {
                id: 4,
                name: "Avocado",
                price: 1.49,
                category: "Snacks",
                description: "A healthy treat...",
                date_created: "2020-11-20T10:48:05.535311Z",
                tags: [
                    4
                ]
            },
            status
        })
            .then(res => {
                console.log(res)
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
        </Fragment>
    );
}

export default OrderForm;
