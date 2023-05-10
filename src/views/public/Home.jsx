import { useContext, useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import ProductsContext from '../../ProductsContext'
import { useNavigate } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";


// const Home = () => {
//     const { products, addCart } = useContext(ProductsContext)
//     const navigate = useNavigate()

//     const [showFullText, setShowFullText] = useState(false);

//     function handleTextClick() {
//         setShowFullText((prevShowFullText) => !prevShowFullText);
//     }



//     return (
//         <Container fluid>
//             <Row className='row-home'>
//                 {products.map(
//                     (producto, i) => {
//                         const description = producto.descripcion.toUpperCase();
//                         const maxChars = 50;
//                         const textToShow = showFullText
//                             ? `${description} (ver menos)`
//                             : `${description.slice(0, maxChars)}... (ver más)`;
//                         const textClassName = showFullText
//                             ? "text-fucsia show-full-text"
//                             : "text-turquoise";
//                         return (
//                             <Col xs={12} sm={3} className="productos" key={producto.id}>
//                                 <Card className='text-center m-2 bg-dark text-light p-2 rounded shadow' key={producto.id} >
//                                     <Card.Img variant="top" src={producto.img_url} width={400} height={380} />
//                                     <Card.Body>
//                                         <Card.Title key={producto.precio}>{producto.nombre.toUpperCase()}</Card.Title>
//                                         <Card.Text key={producto.precio_oferta} className={`card-text ${textClassName}`} onClick={handleTextClick}>

//                                             {textToShow}

//                                         </Card.Text>
//                                         <Button className='mx-3' variant="outline-light" onClick={() => { navigate(`producto/${producto.id}`) }}><BiFoodMenu /> Detalles</Button>
//                                         <Button className='mx-3' variant="outline-light" onClick={() => { addCart(producto) }}>Carrito <BsFillCartFill /></Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         )
//                     }
//                 )
//                 }
//             </Row>
//         </Container>
//     )
// }

// export default Home
const Home = () => {
    const { products, addCart } = useContext(ProductsContext);
    const navigate = useNavigate();

    const [showFullText, setShowFullText] = useState({});

    function handleTextClick(id) {
        setShowFullText(prevShowFullText => ({
            ...prevShowFullText,
            [id]: !prevShowFullText[id]
        }));
    }

    return (
        <Container fluid>
            <Row className="row-home">
                {products.map((producto, i) => {
                    const description = producto.descripcion.toUpperCase();
                    const maxChars = 50;
                    const a = showFullText[producto.id];
                    const shouldShowMoreButton = description.length > maxChars;
                    const shouldShowLessButton = a && shouldShowMoreButton;
                    const textToShow = a
                        ? `${description} ${shouldShowLessButton ? "(ver menos)" : ""}`
                        : shouldShowMoreButton
                            ? `${description.slice(0, maxChars)}... (ver más)`
                            : description;
                    const textClassName = a
                        ? "text-fucsia show-full-text"
                        : "text-turquoise";
                    return (
                        <Col xs={12} sm={3} className="productos" key={producto.id}>
                            <Card
                                className="text-center m-2 bg-dark text-light p-2 rounded shadow"
                                key={producto.id}
                            >
                                <Card.Img
                                    variant="top"
                                    src={producto.img_url}
                                    width={400}
                                    height={380}
                                />
                                <Card.Body>
                                    <Card.Title key={producto.precio}>
                                        {producto.nombre.toUpperCase()}
                                    </Card.Title>
                                    <Card.Text
                                        key={producto.precio_oferta}
                                        className={`card-text ${textClassName}`}
                                        onClick={() => handleTextClick(producto.id)}
                                    >
                                        {textToShow}
                                    </Card.Text>
                                    <Button
                                        className="mx-3"
                                        variant="outline-light"
                                        onClick={() => {
                                            navigate(`producto/${producto.id}`);
                                        }}
                                    >
                                        <BiFoodMenu /> Detalles
                                    </Button>
                                    <Button
                                        className="mx-3"
                                        variant="outline-light"
                                        onClick={() => {
                                            addCart(producto);
                                        }}
                                    >
                                        Carrito <BsFillCartFill />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Home;