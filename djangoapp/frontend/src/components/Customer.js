import { Fragment } from 'react';

function Customer() {
    return (
        <Fragment>
            <br />

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <h5>Customer:</h5>
                        <hr />
                        <a class="btn btn-outline-info  btn-sm btn-block" href="">Update Customer</a>
                        <a class="btn btn-outline-danger  btn-sm btn-block" href="">Delete Customer</a>

                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body">
                        <h5>Contact Information</h5>
                        <hr />
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body">
                        <h5>Total Orders</h5>
                        <hr />
                        <h1 className="h1-style"></h1>
                    </div>
                </div>
            </div>


            <br />
            <div class="row">
                <div class="col">
                    <div class="card card-body">
                        <form method="get">

                            <button class="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </div>
            <br />

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


                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Customer;
