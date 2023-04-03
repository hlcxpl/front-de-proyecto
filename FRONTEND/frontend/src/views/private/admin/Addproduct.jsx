import React, { useContext } from 'react'
import ProductsContext from '../../../ProductsContext'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'

function Administrador() {
    const { productoNuevo, setproductoNuevo, handleSumitAgregarProducto } = useContext(ProductsContext)
    const valueToState = ({ name, value }) => {
        setproductoNuevo({ ...productoNuevo, [name]: value });
    };


    return (
        <Container fluid="sm" className='container-sm tarjeta'>
            <Row className='m-5 text-center'>
                <h1 className='mt-5'>Zona Administrador</h1>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded text-center mt-5">
                    <h1 className='mb-5'>Agregar Producto</h1>
                    <hr></hr>
                    <Form className='text-center' onSubmit={handleSumitAgregarProducto}>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                            <Form.Label><h2>Nombre de Producto</h2></Form.Label>
                            <Form.Control type="name" placeholder="Agrega el Nombre" name="nombre" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicArea">
                            <Form.Label><h2>Descripcion del producto</h2></Form.Label>
                            <Form.Control as="textarea"  row={3} placeholder="Agrega el Descripcion" name="descripcion" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label><h2>Precio</h2></Form.Label>
                            <Form.Control type="text" placeholder="Agrega el precio" name="precio" onChange={(event) =>
                                valueToState({ name: event.target.name, value: Number(event.target.value) })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label><h2>Cantidad</h2></Form.Label>
                            <Form.Control type="text" placeholder="Agrega el precio" name="cantidad" onChange={(event) =>
                                valueToState({ name: event.target.name, value: Number(event.target.value) })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label><h2>Precio Oferta</h2></Form.Label>
                            <Form.Control type="text" placeholder="Agrega el precio" name="precio_oferta" onChange={(event) =>
                                valueToState({ name: event.target.name, value: Number(event.target.value) })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUrl">
                            <Form.Label><h2>Imagen</h2></Form.Label>
                            <Form.Control type="url" placeholder="Agrega la URl de la Imagen" name="img_url"onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>
                        <Button
                            variant="outline-primary" type="submit" size="lg" className="mt-3" >
                            Agregar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Administrador