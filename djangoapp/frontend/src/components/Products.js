import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash"

function Products() {
    const [products, setProducts] = useState([])
    const [original, setOriginal] = useState([])
    const [target, setTarget] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product-list/')
            .then(res => {
                setProducts(res.data)
                setOriginal(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function updateList(e) {
        console.log(e.target.value)
        setTarget(e.target.value)
        setProducts(products.filter(item => item.name.toLowerCase().includes(target.toLowerCase())))
    }

    function resetList(e) {
        setTarget(e.target.value)
        const newArr = products.filter(item => item.name.toLowerCase().includes(target.toLowerCase()))
        setProducts(newArr)
        if (e.key === 'Backspace') {
            setProducts(original)
        }
    }

    return (
        <Fragment>
            <br />

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <div className="top-bar">
                            <h5>Products</h5>
                            <input onChange={(e) => { updateList(e) }} onKeyDown={(e) => { resetList(e) }}></input>
                        </div>
                        <Link class="btn btn-primary  btn-sm btn-block" to={{
                            pathname: '/productform',
                            state: {
                            }
                        }}>Pitch a New Product</Link>
                    </div>
                    <div class="card card-body">
                        <table class="table">
                            <tr >
                                <th>Product</th>
                                <th className="center">Category</th>
                                <th className="center">Price</th>
                                <th className="center">Created</th>
                                <th className="center">Stats</th>
                            </tr>
                            {products.map(product => (
                                <tr >
                                    <td>{product.name}</td>
                                    <td className="center">{product.category}</td>
                                    <td className="center">${product.price}</td>
                                    <td className="center">{product.date_created}</td>
                                    <td className="center">
                                        <Link class="fas fa-eye" to={{
                                            pathname: '/itemstats/' + product.id + '/',
                                        }}></Link>

                                    </td>
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
