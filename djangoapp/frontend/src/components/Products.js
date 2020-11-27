import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from "lodash"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    function deleteIt(id) {
        axios.delete(`http://127.0.0.1:8000/product-delete/${id}/`)
            .then(res => {
                console.log(res)
                let array = [...products]
                setProducts(array.filter(item => item.id !== id))
                toast.error("Product has been removed. 🙅🏽‍♂️")
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
                        <div className="top-bar">
                            <h5>Products</h5>
                            <div>
                                <i class="fas fa-search"></i>
                                <input onChange={(e) => { updateList(e) }} onKeyDown={(e) => { resetList(e) }}></input>
                            </div>
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
                                <th className="center"></th>
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
                                    <td className="center"><i onClick={() => { deleteIt(product.id) }} class="fas fa-trash-alt trash"></i>

                                    </td>

                                </tr>
                            ))}

                        </table>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    limit={1} />
            </div>
        </Fragment>
    );
}

export default Products;
