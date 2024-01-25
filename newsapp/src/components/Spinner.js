import React from 'react'
import loading from './1487.gif';
const Spinner = () => {

    return (
      <div  className='text-center'>
        <img src={loading} alt='loading' className='my-2'/>
      </div>
    )
}

export default Spinner