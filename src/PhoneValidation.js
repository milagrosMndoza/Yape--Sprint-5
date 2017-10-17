import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './PhoneValidation.css';
import phone from "./phone.png";
import {
	Input, Button, Icon
} from 'react-materialize';

import { Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, Image, Checkbox } from 'react-bootstrap';

const PhoneValidation = ({ model }) => {

	return (
		<Grid className="text-center">
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><center><Image className="spaceInit" src={phone} /></center></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><h5 >Para comenzar validemos tu número</h5></Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}><p>Recibirás un SMS con un código de validación</p></Col>
			</Row>

			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input
						className="input-yellow-bottom text-purple-dark text-center"
						type="text"
						placeholder=" ingresa tu celular"
						maxLength="9"
						value={model.user.phone}
						onChange={e => model.validateNumberPhone(e)} />
					<input type="checkbox" id="terms" onChange={e => model.checkboxPhone(e)} />
					<label for="terms">Acepto los <span className="text-turquoise">términos y condiciones</span></label><br />
				</Col>
			</Row>
			<Row >
				<Col className="btns" xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					{
						model.activeNextRegisterPhone ?
							<NavLink to={"/code-validation"} className="block button-register bg-yellow text-white">CONTINUAR</NavLink>
							:
							<Button className="button-register bg-gray-light text-white">CONTINUAR</Button>
							    ? <NavLink to="/code-validation" className="navPhoneValidation">Crear Cuenta</NavLink>
          				: <Button className="btnPhoneValidation">Crear Cuenta</Button>
					}
				</Col>
			</Row>

		</Grid>
	);
};

export default PhoneValidation;


