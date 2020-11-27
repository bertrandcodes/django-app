import { Fragment } from 'react';

function Status(props) {
    return (
        <Fragment>
            <br />

            <div class="row">
                <div class="col">
                    <div class="col-md">
                        <div class="card text-center text-white  mb-3" id="total-orders">
                            <div class="card-header">
                                <h5 class="card-title">Total Orders</h5>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{props.orders.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="col-md">
                        <div class="card text-center text-white  mb-3" id="orders-delivered">
                            <div class="card-header">
                                <h5 class="card-title">Orders Delivered</h5>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{props.orders.filter(order => order.status == "Out for delivery").length}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="col-md">
                        <div class="card text-center text-white  mb-3" id="orders-pending">
                            <div class="card-header">
                                <h5 class="card-title">Orders Pending</h5>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{props.orders.filter(order => order.status == "Pending").length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Status;
