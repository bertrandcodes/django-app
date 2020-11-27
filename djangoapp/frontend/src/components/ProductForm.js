import { Fragment, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductForm() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    function submitProduct(e) {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/product-create/', {
            name,
            price: parseInt(price).toFixed(2),
            category,
            description
        })
            .then(res => {
                console.log(res);
                setTimeout(() => { window.location.replace('/products'); }, 1500)
                toast.success("Product has been added! 🎉")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Fragment>
            <div class="order-row product">
                <div >
                    <div class="card card-body product">
                        <h1>💸 Introduce The Next Big Product.</h1>
                        <Form className="product-form">
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Price:</Form.Label>
                                <Form.Control placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category:</Form.Label>
                                <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
                                    <option selected value> -- select an option -- </option>
                                    <option>Snacks</option>
                                    <option>Toiletries</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                        </Form>
                        <Button className="product-button" onClick={(e) => { submitProduct(e) }} variant="primary" type="submit">
                            Order
                            </Button>
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

export default ProductForm;
