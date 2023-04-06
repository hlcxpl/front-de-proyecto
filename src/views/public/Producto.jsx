import React, { useContext } from 'react'
import ProductsContext from '../../ProductsContext'
import { useParams } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";

function Producto() {
    const { products, addCart } = useContext(ProductsContext)
    const { id } = useParams()
    return (
        <div className='container-sm'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }}>
                    {products.filter(producto => producto.id === Number(id)).map(producto => {
                        return (
                            <Card className='text-center justify-content-center p-2 bg-dark text-light shadow' key={producto.id} >
                                <Card.Img variant="top" src={producto.img_url} />
                                <Card.Body>
                                    <Card.Title>{producto.nombre.toUpperCase()}</Card.Title>
                                    <Card.Text>{producto.descripcion}</Card.Text>
                                    <Card.Title className='p-2 text-success'>Precio: ${producto.precio}</Card.Title>
                                    <Button variant="outline-light" onClick={() => { addCart(producto) }}>Añadir <BsFillCartFill /></Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Producto