import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './CreateUser.css';
import {
	Grid, Row, Col, Image
} from 'react-bootstrap';
import {
	Input, Button
} from 'react-materialize'

const Header = () => {
	return(
		<div>
			<Row className="show-grid">
			<Col xs={10} xsOffset={1}  sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
				<center><Image src="http://174.138.48.60:3000/img/icons/lockone.png" className="imgLockone" /></center>
			</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<h5 className="titleCU">Crea tu usuario Yape</h5>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<span className="infoUserCU">Ingresa un nombre, email y clave de usuario</span>
				</Col>
			</Row>
		</div>
	);
}

const FormUser = ({model}) => {
	return (
		<div>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="email" 
						s={12} 
						className="text-center messageCU" 
						placeholder="Email"
						value={model.user.email}
						onChange={e => model.validateEmail(e)}/>
				</Col>
			</Row>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					<Input type="password" 
						s={12} 
						className="text-center lockCU" 
						placeholder="Password" 
						maxLength="6"
						value={model.user.password}
						onChange={e => model.validatePassword(e)}/>
					<div className="noteCU">Cuida esta clave como oro, es tu acceso a Yape.</div>
				</Col>
			</Row>
		</div>
	);
}

const Buttons = ({ model}) => {
	return (
		<div>
			<Row>
				<Col className="btnsCU" xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
					{
						model.isLogging
						? <NavLink to="/account" className="navCreateUser">Ingresar</NavLink>
						: <Button className="btnCreateUser">Ingresar</Button>
					}
				</Col>
			</Row>
		</div>
	);
}

const CreateUser = ({ model }) => {
	return (
		<Grid className="text-center" id="createUser">
				<Header />
				<FormUser model = {model} />
				<Buttons model = {model} />
		</Grid>
  	);
};

export default CreateUser;
