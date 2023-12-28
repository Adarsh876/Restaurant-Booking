import React from 'react'
import { Row , Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Restview() {
  
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);

  const {allRestaurant , loading , error}  = useSelector((state)=>state.restaurantSlice)

  const selectedRestaurant = allRestaurant.find((item)=>item.id==id)
  console.log(selectedRestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='mt-3 ms-5 p-5'>
      <Row>
        <Col lg={4}>
          <img width={'100%'} src="https://th.bing.com/th/id/OIP.RY2ciulhrxuq9eYU2Psf7AHaLM?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="no image" />

        </Col>
        <Col lg={8}>
          <div>
            <hr />
            <h1 className="text-center">RESTAURANT <span className='text-warning'>DETAILS</span></h1>
            <hr />
          </div>
          <div className="bg-dark rounded p-2 ">
            <h3 className='text-center'>Mission Chinese Food</h3>
            <ListGroup className='ms-5'>
             <ListGroup.Item>Cras justo odio</ListGroup.Item> <hr />
             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> <hr />
             <ListGroup.Item>Morbi leo risus</ListGroup.Item>
           </ListGroup>

           <div className="text-center m-3">
            <button onClick={handleShow} className='btn btn-warning rounded p-2'>Operating Hours</button>
            <Restreview/>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup >
        <ListGroup.Item className='text-dark'>Monday :</ListGroup.Item>
        <ListGroup.Item>Tuesday :</ListGroup.Item>
        <ListGroup.Item>Wednesday :</ListGroup.Item>
        <ListGroup.Item>Thursday :</ListGroup.Item>
        <ListGroup.Item>Friday :</ListGroup.Item>
        <ListGroup.Item>Saturday :</ListGroup.Item>
        <ListGroup.Item>Sunday :</ListGroup.Item>
       </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
           </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Restview