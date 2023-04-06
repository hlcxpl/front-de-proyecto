import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import ProductsContext from '../../ProductsContext'

function Registrar() {
    const navigate = useNavigate();
    const { usuario, setUsuario, handleSumitRegistrar, shouldNavigate } = useContext(ProductsContext)

    const valueToState = ({ name, value }) => {
        setUsuario({ ...usuario, [name]: value });
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate(`../login`)
        }
    }, [ shouldNavigate, navigate]);

    return (
        <Container fluid="sm" className='container-sm tarjeta'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded">
                    <h1 className='text-center mb-4'>Registrarse</h1>
                    <hr></hr>
                    <Form className='text-center' onSubmit={handleSumitRegistrar}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label><h2>Nombre</h2></Form.Label>
                            <Form.Control type="name" placeholder="Nombre" name="nombre"
                                onChange={(event) =>
                                    valueToState({ name: event.target.name, value: event.target.value })
                                }
                            />
                            <Form.Text className="text-muted">
                                Nunca compatiremos tu información.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h2>Correo Electronico</h2></Form.Label>
                            <Form.Control type="email" placeholder="Correo Electonico" name="email" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h2>Contraseña</h2></Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><h2>Teléfono</h2></Form.Label>
                            <Form.Control placeholder="Escriba su numero de Telefono" name="telefono" onChange={(event) =>
                                valueToState({ name: event.target.name, value: Number(event.target.value) })
                            } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
                            <Form.Control placeholder="Escriba la Dirección de Facturación" name="direccion_de_envio_por_default" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><h2>Comuna</h2></Form.Label>
                            <Form.Control placeholder="Comuna" name="comuna" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>
                        {/* Button for Register and Go to Login :D! */}
                        <Button variant="outline-primary" size="lg" className='mt-5'
                            type="submit">
                            Registrase
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Registrar