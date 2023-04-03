import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import ProductsContext from '../../../ProductsContext'

const Pedidos = () => {
  const { orders } = useContext(ProductsContext)
  return (
    <div>
      <h1 className=' text-center text-dark mt-5'>Mis Pedidos</h1>
      <ListGroup variant='flush' className='mt-5'>
        {orders.map((pedido, i) => (
          <ListGroup.Item className='rounded text-capitalize bg-dark text-light m-1 shadow d-flex justify-content-between py-2' key={i}>
            <img src={pedido.img_url} style={{ width: 50 }} alt='' />
            <h6 className='mb-0 text-capitalize p-2'>{pedido.direccion_de_envio}</h6>
            <h6 className='mb-0 text-capitalize p-2'>{pedido.email_pedido}</h6>
            <h6 className='mb-0 text-capitalize p-2'>{pedido.fecha_pedido}</h6>
            <h6 className='mb-0 text-capitalize p-2'>{pedido.estatus_pedido}</h6>
            <h6 className='mb-0 p-2 text-success'>${(pedido.precio)}</h6>
            <h6 className='mb-0 p-2 text-success'>${(pedido.cantidad)}</h6>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Pedidos