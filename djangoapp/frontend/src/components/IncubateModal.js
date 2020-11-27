import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import bear from '../../public/bear.png';
import axios from 'axios';

function IncubateModal
    (props) {

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
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Incubate Product 😴
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="bear-div">
                        <p>Sometimes, a product doesn't do too hot.</p>
                        <img src={bear} className="bear" />
                        <p>That's okay! Let it hiberate and pick up later.</p>
                        <p className="algo">Our algorithms recommend a <span className="recommend">60 day</span> incubation period for this product</p>
                    </div>
                    <Form.Group controlId="formGroupCell">
                        <div className="bear-div bottom">
                            <Form.Label className="bear-label">Set Incubation Period</Form.Label>
                            <Form.Control placeholder="#" className="bear-input" />
                        </div>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { deleteIt(props.id) }} className="button" variant="primary" type="submit">
                    Sleep
                            </Button>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IncubateModal;
