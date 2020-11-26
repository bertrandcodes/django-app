import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Status from './Status';


function Dashboard() {
    const [customers, setCustomers] = useState([])
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/customer-list/')
            .then(res => {
                setCustomers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('http://127.0.0.1:8000/order-list/')
            .then(res => {
                setOrders(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('http://127.0.0.1:8000/product-list/')
            .then(res => {
                setProducts(res.data)
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

    return (
        <Fragment>
            <Status />
            <br />

            <div class="row status">
                <div class="col-md-5">
                    <h5>CUSTOMERS:</h5>
                    <hr />
                    <div class="card card-body">
                        <Link class="btn btn-primary  btn-sm btn-block" to="/customer">Create Customer</Link>
                        <table class="table table-sm">
                            <tr>
                                <th></th>
                                <th>Customer</th>
                                <th>Phone</th>
                            </tr>
                            {customers.map(customer => (
                                <tr>
                                    <td><Link class="btn btn-sm btn-info" to={`/customer/${customer.id}`}>View</Link></td>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>

                <div class="col-md-7">
                    <h5>LAST 5 ORDERS:</h5>
                    <hr />
                    <div class="card card-body">
                        <Link class="btn btn-primary  btn-sm btn-block" to={{
                            pathname: '/orderform',
                            state: {
                                customers,
                                orders,
                                products
                            }
                        }}>Create Order</Link>
                        <table class="table table-sm">
                            <tr>
                                <th>Product</th>
                                <th>Date Ordered</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                            {orders.map(order => (
                                <tr>
                                    <td>{order.product.name}</td>
                                    <td>{order.date_created}</td>
                                    <td>{order.status}</td>
                                    <td><a class="btn btn-sm btn-info" href="">Update</a></td>
                                    <td><a class="btn btn-sm btn-danger" onClick={() => { deleteIt(order.id) }}>Delete</a></td>
                                </tr>
                            ))}

                        </table>
                    </div>
                </div>

            </div >
        </Fragment>
    );
}

export default Dashboard;
