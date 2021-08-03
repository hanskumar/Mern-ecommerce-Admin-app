import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/layout'

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{backgroundColor:'#ffff'}}>
                <h2>Welcome to Admin pannel</h2>
            </Jumbotron>
        </Layout>
    )
}

export default Home
