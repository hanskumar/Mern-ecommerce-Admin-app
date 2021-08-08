import React from 'react'
import Header from './header/Header'
import {Container,Row,Col,NavLink } from 'react-bootstrap'
import './style.css';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
        <Header/>
          {
          props.sidebar ?
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><Link to={`/`}>Home</Link></li>
                  <li><Link to={`/category`}>Category</Link></li>
                  <li><Link to={`/products`}>Products</Link></li>
                  <li><Link to={`/orders`}>Orders</Link></li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                {props.children}
              </Col>
            </Row>
          </Container>
          :
          props.children
        }
        </>
    )
}

export default Layout
