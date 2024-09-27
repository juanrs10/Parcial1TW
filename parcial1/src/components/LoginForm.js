// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulated authentication
        if (username === 'user' && password === 'password') {
            navigate('/robots');
        } else {
            setError('Error de autenticación. Revise sus credenciales');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <Row>
                <Col md={12}>
                    <h2 className="text-center mb-4">Inicio de sesión</h2>
                    <Form onSubmit={handleLogin} className="p-4 border rounded shadow-sm bg-white">
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                                placeholder="Ingrese su nombre de usuario"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Ingrese su contraseña"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <Button variant="primary" type="submit" className="btn btn-lg px-4">
                                Ingresar
                            </Button>
                            <Button variant="danger" type="button" className="btn btn-lg px-4">
                                Cancelar
                            </Button>
                        </div>
                        {error && <p className="text-danger text-center mt-3">{error}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
