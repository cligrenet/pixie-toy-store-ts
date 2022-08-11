import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';

export const Navbar = () => {
	return (
		<NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/store">
						Store
					</Nav.Link>
					<Nav.Link as={NavLink} to="/about">
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{ width: '3rem', height: '3rem', position: 'relative' }}
					variant="outline-primary"
					className="rounded-circle"
				>
					<HiShoppingCart style={{ width: '1.5em', height: '1.5em' }} />
					<div
						className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
						style={{
							color: 'white',
							width: '1.2em',
							height: '1.2em',
							position: 'absolute',
							bottom: 0,
							right: 0,
							transform: 'translate(25%, 25%)',
						}}
					>
						3
					</div>
				</Button>
			</Container>
		</NavbarBs>
	);
};
