
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ProductsContext from '../ProductsContext';
import React, { useContext, useEffect } from 'react'
import { VscAccount } from "react-icons/vsc";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import green from '@mui/material/colors/green';
import { red } from '@mui/material/colors';

const color = red[700];


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  



const StyledBadgePeso = styled(Badge)(({ theme }) => ({
    badge: {
        right: -17,
        top: 0,
        border: `2px solid ${green[500]}`,
        padding: "0 4px"
    },
}));

const Navigation = () => {
    const { items, setitems, cart, total, settotal } = useContext(ProductsContext)

    useEffect(() => {
        setitems(cart.reduce((acum, { count }) => acum + count, 0))
        settotal(cart.reduce((acum, { count, precio }) => acum + precio * count, 0))
    }, [cart, settotal, setitems])


    return (
        <Container fluid className='header' xs={12} sm={4}>
            <Navbar className='fixed-top ' bg="dark" variant="dark">
                <Container fluid>
                    <NavLink className='d-flex justify-content-start' to='/'><img src='https://www.casajerusalen.cl/wp-content/uploads/—Pngtree—online-shopping-logo-desing_8918925.png' alt='mamamia-brand' width='150rem' /></NavLink>

                    <Nav className="pt-3">
                        <NavLink to="/login">
                            <VscAccount className="text-light mrg fs-4" />
                        </NavLink>

                        <NavLink className='justify-content-end mx-3 text-decoration-none text-light' to="/carrito">
                            <IconButton arl="cart" className='text-light'>
                                <StyledBadge badgeContent={items} color={red[700]} anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }} overlap='rectangular'>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            <StyledBadgePeso badgeContent={total} style={{ color: green[500] }} max={9999999} anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }} className=" mx-3 " overlap='rectangular'><MonetizationOnOutlinedIcon className='mx-1' /></StyledBadgePeso>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='text-center text-light h1nav '>Descubre el sabor!!!</h1>
        </Container>
    )
}
export default Navigation