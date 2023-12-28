import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({items}) {
  return (
    <div>
        <Link to={`/restview/${items.id}`} style={{textDecoration:'none'}}>
          <Card style={{ width: '100%' }}>
        <Card.Img style={{height:'400px'}} variant="top" src={items.photograph} />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>{items.name}</Card.Title>
          <Card.Text>
            {items.address}
          </Card.Text> 
          <hr />
          <div className="d-flex justify-content-between">
              <a style={{textDecoration:'none'}} href="">{items.neighborhood}</a>
              <a style={{textDecoration:'none'}} href="">{items.cuisine_type}</a>
          </div>
        </Card.Body>
      </Card>
        </Link>
    </div>
  )
}

export default Restcard