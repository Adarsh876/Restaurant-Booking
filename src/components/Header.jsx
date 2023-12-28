import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';

function Header() {

  const dispatch = useDispatch()
  return (
    <div className=''>
        <Navbar variant='dark' className="bg-primary p-3">
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.ZvIIIAg6JUqvWreYqYi88wHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <h5 className=' ms-4'>Food <span>Circle</span></h5>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control onChange={(e)=>dispatch(search(e.target.value))}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header