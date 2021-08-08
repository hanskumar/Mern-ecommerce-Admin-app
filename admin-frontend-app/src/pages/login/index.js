import React,{useState} from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import { login } from '../../actions' 
import { useDispatch ,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = () => {

    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const auth = useSelector(state => state.auth);

    const userLogin = (e)=>{
        e.preventDefault();
        const user = {email,password,}
        dispatch(login(user));
    }
    console.log(auth);
    if(auth.authanticate){
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            <h2>Login</h2>
            <Row style={{ marginTop: '50px' }}>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={userLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{float:'left'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{float:'left'}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>

                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

export default Login
