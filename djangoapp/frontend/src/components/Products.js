import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product-list/')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                            {products.map(product => (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>${product.price}</td>
                                </tr>
                            ))}

                        </table>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Products;
