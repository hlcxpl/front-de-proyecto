import { useContext, useEffect } from 'react'
import ProductsContext from '../../ProductsContext'
import { useNavigate } from 'react-router-dom'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const { credentials, setcredentials, handleSumitLogin, shouldNavigate2, setShouldNavigate2} = useContext(ProductsContext)
    const valueToState = ({ name, value }) => {
        setcredentials({ ...credentials, [name]: value });
    };
    
    useEffect(() => {
        if (shouldNavigate2) {
            navigate(`../usuario`)
        }
    }, [handleSumitLogin, navigate, shouldNavigate2,setShouldNavigate2])

    
    return (
        <Container fluid="sm" className='tarjeta'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }} className="bg-dark text-light p-5 rounded">
                    <h1 className='text-center  mb-5'>Login</h1>
                    <hr className='mb-5' />
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h2>Correo Electronico</h2></Form.Label>
                            <Form.Control type="email" placeholder="Escribe tu Correo aqui" name="email" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                            <Form.Text className="text-muted mt-2">
                                No compartiremos tu información con nadie.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h2>Contraseña</h2></Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={(event) =>
                                valueToState({ name: event.target.name, value: event.target.value })
                            } />
                        </Form.Group>
                        <div>Click para<NavLink className='mx-1 text-light' to="/registrar">Registrarse</NavLink></div>
                        <Button className='mt-3' size="lg"
                            variant="primary" type="submit" onClick={handleSumitLogin}
                        >
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
