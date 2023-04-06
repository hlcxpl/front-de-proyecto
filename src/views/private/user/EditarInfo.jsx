import React, { useContext, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import ProductsContext from '../../../ProductsContext'

const EditarInfo = () => {
  const { user, setuser, handleSumitUserUpdate } = useContext(ProductsContext)
  

  const valueToState = ({ name, value }) => {
    setuser({ ...user, [name]: value });
  };
  useEffect(() => {
   
  }, [])
  
  console.log(user)
  return (
    <>
      <h1 className=' text-center text-dark '>Información de usuario</h1>
      <Container className="pt-5" fluid="sm">

        <Form onSubmit={handleSumitUserUpdate}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label><h2>Nombre</h2></Form.Label>
            <Form.Control type="text" placeholder={user.nombre} name="nombre" defaultValue={user.nombre} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><h2>Email</h2></Form.Label>
            <Form.Control type="email" placeholder={user.email} defaultValue={user.email} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><h2>Password</h2></Form.Label>
            <Form.Control type="password" placeholder={user.password} defaultValue={user.password} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label><h2>Teléfono</h2></Form.Label>
            <Form.Control placeholder={user.telefono} defaultValue={user.phone} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group>

          <Form.Group>
            <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
            <Form.Control placeholder={user.direccion_de_envio_por_default} defaultValue={user.direccion_de_envio_por_default} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group>
          <Form.Group>
            <Form.Label><h2>comuna</h2></Form.Label>
            <Form.Control placeholder={user.comuna} defaultValue={user.comuna} onChange={(event) =>
              valueToState({ name: event.target.name, value: event.target.value })
            } />
          </Form.Group>

          {/* Button for edit and Go to  :D! */}
          <Button className='my-2'
          
            variant="primary" type="submit">
            Editar información
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default EditarInfo