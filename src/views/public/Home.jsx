import React from 'react'
import { useContext } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import ProductsContext from '../../ProductsContext'
import { useNavigate } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
const Home = () => {
    const { products, addCart } = useContext(ProductsContext)
    const navigate = useNavigate()

    return (
        <Container fluid>
            <Row className='row-home'>
                {products.map(
                    (producto, i) => {
                        return (
                            <Col xs={12} sm={3} className="productos" key={producto.id}>
                                <Card className='text-center m-2 bg-dark text-light p-2 rounded shadow' key={producto.id} >
                                    <Card.Img variant="top" src={producto.img_url} width={400} height={350}/>
                                    <Card.Body>
                                        <Card.Title key={producto.precio}>{producto.nombre.toUpperCase()}</Card.Title>
                                        <Card.Text key={producto.precio_oferta}>
                                            {producto.descripcion.toUpperCase()}
                                        </Card.Text>
                                        <Button className='mx-3' variant="outline-light" onClick={() => { navigate(`producto/${producto.id}`) }}><BiFoodMenu /> Detalles</Button>
                                        <Button className='mx-3' variant="outline-light" onClick={() => { addCart(producto) }}>Carrito <BsFillCartFill /></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                )
                }
            </Row>
        </Container>
    )
}

export default Home