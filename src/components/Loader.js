import React from 'react'

import ReactLoading from 'react-loading';

const Loader = ({type, color}) => {
  return (
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
  )
}

export default Loader