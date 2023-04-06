import React, { useContext } from 'react'
import Sidebar from "../../../Components/Sidebar"
import { Routes, Route } from "react-router"
import EditarInfo from "../../private/user/EditarInfo";
import MisPedidos from "../../private/user/Pedidos";
import { Table } from 'react-bootstrap';
import ProductsContext from '../../../ProductsContext';
import { useLocation } from 'react-router';
const Usuario = () => {
    const location = useLocation()
    const { user } = useContext(ProductsContext)
    const cabeceras = Object.keys(user)
    return (
        <div className='flex'>
            <Sidebar />
            <div className='content'>
                {location.pathname === '/usuario' && (
                    <Table striped bordered hover className='productos'>
                        <thead>
                            <tr>
                                {cabeceras.map((cab, i) => (
                                i>=1 ? <th className='text-center' key={cab}>{cab}</th>: null
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={user.id} className='text-center'>
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.direccion_de_envio_por_default}</td>
                                <td>{user.comuna}</td>
                                <td>{user.telefono}</td>
                            </tr>
                        </tbody>
                    </Table>)}
                <Routes>
                    <Route path={`/editar_info/${user.id}`} element={<EditarInfo />} />
                    <Route path="/pedidos" element={<MisPedidos />} />
                </Routes>
            </div>
        </div>
    )
}
export default Usuario