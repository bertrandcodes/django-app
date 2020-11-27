import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import UpdateCustomer from './UpdateCustomer';

function Customer(props) {
    const [customer, setCustomer] = useState([])
    const [orders, setOrders] = useState([])

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/customer-detail/${props.match.params.id}/`)
            .then(res => {
                setCustomer(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('http://127.0.0.1:8000/order-list')
            .then(res => {
                let orderList = res.data.filter(order => order.customer.id == props.match.params.id)
                setOrders(orderList)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function deleteIt(id) {
        axios.delete(`http://127.0.0.1:8000/order-delete/${id}/`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    function deleteUser(id) {
        axios.delete(`http://127.0.0.1:8000/customer-delete/${id}/`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Fragment>
            <br />

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <h5>Customer: <span className="nobold">{customer.name}</span></h5>
                        <hr />
                        <a class="btn btn-outline-info  btn-sm btn-block update" href onClick={() => setModalShow(true)}>Update Customer</a>
                        <UpdateCustomer
                            id={customer.id}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <a class="btn btn-outline-danger  btn-sm btn-block" href="/" onClick={() => { deleteUser(customer.id) }}>Delete Customer</a>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body">
                        <h5>Contact Information</h5>
                        <hr />
                        <p>Email: {customer.email}</p>
                        <p>Phone: {customer.phone}</p>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body">
                        <h5>Total Orders</h5>
                        <hr />
                        <h1 className="h1-style">{orders.length}</h1>
                    </div>
                </div>
            </div>

            <br></br>

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <table class="table table-sm">
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Date Ordered</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>

                            {orders.map(order => (
                                <tr>
                                    <td>{order.product.name}</td>
                                    <td>{order.product.category}</td>
                                    <td>{order.date_created}</td>
                                    <td>{order.status}</td>
                                    <td><a class="btn btn-sm btn-info" href="">Update</a></td>

                                    <td><a class="btn btn-sm btn-danger" onClick={() => { deleteIt(order.id) }}>Delete</a></td>
                                </tr>
                            ))}


                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Customer;
