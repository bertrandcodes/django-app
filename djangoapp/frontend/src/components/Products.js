import { Fragment } from 'react';

function Products() {
    return (
        <Fragment>
            <br />

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <h5>Products</h5>
                    </div>
                    <div class="card card-body">
                        <table class="table">
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Products;
