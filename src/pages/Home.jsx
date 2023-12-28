import React, { useEffect } from 'react'
import Restcard from '../components/Restcard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../components/redux/restaurantSlice'


function Home(props) {

  const allRestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant.restaurants)
  console.log(allRestaurant);
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchRestaurant())
  },[])
  return (
    <div>
      <Row>
        { allRestaurant?.length>0?
        allRestaurant?.map((restaurant)=>(
          <Col className='py-5 px-5' sm={6} md={4}>
          <Restcard items={restaurant}/>
            </Col>))
            : <p>Nothing to display</p>
            }
        </Row>
    </div>
  )
}

export default Home