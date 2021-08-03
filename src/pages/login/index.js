import React from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'
import Layout from '../../components/layout'

const Login = () => {
    return (
        <Layout>
            <h2>Login</h2>
            <Row style={{ marginTop: '50px' }}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{float:'left'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{float:'left'}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>

                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

export default Login
