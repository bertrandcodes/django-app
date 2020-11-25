import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Status from './Status';


function Dashboard() {
    return (
        <Fragment>
            <Status />
            <br />

            <div class="row">
                <div class="col-md-5">
                    <h5>CUSTOMERS:</h5>
                    <hr />
                    <div class="card card-body">
                        <Link class="btn btn-primary  btn-sm btn-block" to="/customer">Create Customer</Link>
                        <table class="table table-sm">
                            <tr >
                                <th></th>
                                <th>Customer</th>
                                <th>Phone</th>
                            </tr>

                        </table>
                    </div>
                </div>

                <div class="col-md-7">
                    <h5>LAST 5 ORDERS</h5>
                    <hr />
                    <div class="card card-body">
                        <Link class="btn btn-primary  btn-sm btn-block" to="/orderform">Create Order</Link>
                        <table class="table table-sm">
                            <tr >
                                <th>Product</th>
                                <th>Date Ordered</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>


                        </table>
                    </div>
                </div>

            </div >
        </Fragment>
    );
}

export default Dashboard;
