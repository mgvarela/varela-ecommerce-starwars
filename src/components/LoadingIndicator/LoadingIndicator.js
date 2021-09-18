import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoadingIndicator.css';

const LoadingIndicator = () => {
  const [show, setShow] = useState(true)
  useEffect(() => {
     const timeout = setTimeout(() => setShow(false), 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {show && <h3 className="cargando">Cargamdp Articulos...</h3>}
    </>
  )
}
export default LoadingIndicator