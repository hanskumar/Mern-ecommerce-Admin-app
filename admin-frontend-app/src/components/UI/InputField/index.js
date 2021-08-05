import React from 'react'
import { Container,Form } from 'react-bootstrap'

const Input = (props) => {
    return (
        <>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{ props.lable }</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            
        </>
    )
}

export default Input
