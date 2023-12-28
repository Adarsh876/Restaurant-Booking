import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Restreview() {
    const [open, setOpen] = useState(false);
  return (
    <>
        <button onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} className='btn btn-warning rounded ms-3 p-2'>Click here to see the reviews</button>

        <div className='my-2'>
            <hr />
            <Collapse in={open}>
                <div className="mt-5">
                    <h6>name and date</h6>
                    <p>Rating</p>
                    <p>Discription</p>
                </div>
            </Collapse>
        </div>
    </>
  )
}

export default Restreview