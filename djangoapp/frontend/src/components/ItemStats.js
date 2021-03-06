import { Fragment, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { Pie, Doughnut, Line } from 'react-chartjs-2';

import IncubateModal from './IncubateModal';

const graph = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const graph2 = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Purchases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#007bff',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        },
        {
            label: 'Average',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#4B5000',
            borderColor: '#dc3545',
            borderWidth: 2,
            data: [60, 73, 75, 65, 60]
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { orders: parseInt(state.orders) + 1 };
        case 'decrement':
            return { orders: parseInt(state.orders) - 1 };
        default:
            throw new Error();
    }
}

function ItemStats(props) {
    let initialState = { orders: (Math.random() * 15).toFixed() }
    const [modalShow, setModalShow] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const [value, setValue] = useState((Math.random() * 10).toFixed())

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product-detail/${props.match.params.id}/`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function deleteIt(id) {
        axios.delete(`http://127.0.0.1:8000/product-delete/${id}/`)
            .then(res => {
                console.log(res)
                window.location.replace('/products')
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
                    <div class="card card-body product-info">
                        <h5>Product: <span className="nobold">{product.name}</span></h5>
                        <hr className="horizontal" />

                        <a class="btn btn-outline-info  btn-sm btn-block update-prod" href onClick={() => setModalShow(true)}>Incubate Product</a>
                        <IncubateModal
                            id={product.id}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <a class="btn btn-outline-danger  btn-sm btn-block danger" onClick={() => { deleteIt(product.id) }} href>Delete Product</a>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body product-info">
                        <h5>Description:</h5>
                        <hr />
                        <p className="product-descrip">{product.description}</p>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card card-body">
                        <h5>Total Orders:</h5>
                        <hr />

                        <h1 className="h1-style">
                            <div className="arrows"><i onClick={() => dispatch({ type: 'decrement' })} class="fa fa-chevron-left"></i><CountUp className="h1-style" end={state.orders} />
                                <i onClick={() => dispatch({ type: 'increment' })} class="fa fa-chevron-right"></i>
                            </div>
                            <h5 className="increase">
                                (+{value}%)
                        </h5></h1>


                    </div>
                </div>
            </div>

            <br></br>

            <div class="row">
                <div class="col-md">
                    <div class="card card-body">
                        <table class="table table-sm">
                            <div className="graphs">
                                <div className="line">
                                    <Line
                                        data={graph2}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Purchase Rate Per Month',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                </div>
                                <div className="pie">
                                    <Pie
                                        data={graph}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Average Stats This Month',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />

                                    <Doughnut
                                        data={graph}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Comparison To Other Products',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ItemStats;
