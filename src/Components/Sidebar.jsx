import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ProductsContext  from '../ProductsContext'
const Sidebar = () => {
  const {user}= useContext(ProductsContext)
  return (
    <Container className='text-light bg-dark sidebar pt-5'>
      <ul>
        <li>
          <NavLink to={`/usuario/editar_info/${user.id}`} className="decoration-none text-light">
            Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink to="/usuario/pedidos" className="decoration-none text-light">
            Pedidos
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}
export default Sidebar;
