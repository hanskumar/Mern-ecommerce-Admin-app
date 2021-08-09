import React,{useState,useEffect} from 'react'
import Layout from '../../components/layout'
import {Container,Row,Col,Button,Modal,Form,Table} from 'react-bootstrap'
import {getAllCategory,addCategory} from '../../actions'
import {getAllProducts,addProdcut} from '../../actions'

import {useDispatch,useSelector} from 'react-redux'
import './style.css'
import { IoIosAddCircle } from "react-icons/io";

const Product = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        //dispatch(getAllCategory());
        dispatch(getAllProducts());
    }, []);

    const dispatch = useDispatch();
    //const categories = useSelector(state => state.categories)

    const products = useSelector(state => state.products);

    //console.log("products Array",products);

    const [productName,setProductName] = useState();
    const [productPrice,setProductPrice] = useState();
    const [productQuantity,setProductQuantity] = useState();
    const [productDescription,setProductDescription] = useState();
    const [productCategory,setProductCategory] = useState();


    const SubmitHandler = (e) =>{

        const productData = {name:productName,price:productPrice,quantity:productQuantity,description:productDescription,category:productCategory}

        console.log(productData);
        dispatch(addProdcut(productData));
        setShow(false); 
    }

    return (
        <Layout sidebar>
            
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Product List:</h3>
                            <div className="actionBtnContainer">
                                
                                <button onClick={handleShow}> <IoIosAddCircle/><span>Add</span></button>
                            
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Product category</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.products.length > 0 ? products.products.map((item, index) => 
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category.name }</td>
                            </tr>
                        ):'No Products Founds'} 
                    </tbody>
                </Table>
                    
            
                <Modal show={show} onHide={handleClose}  size="lg"> 
                    <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                       <Form onSubmit={SubmitHandler}>  

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Product Quantity</Form.Label>
                                <Form.Control type="number" placeholder="Enter Product Name" value={productQuantity} onChange={(e)=>setProductQuantity(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Product Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Price" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Parent Category</Form.Label>
                                <Form.Control as="select" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    {/* { categories.categories.map((item, index) => <option value={item._id} key={item._id}>{item.name}</option>)}  */}
                                    
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{float:'left'}}>Product Image</Form.Label>
                                <Form.File id="exampleFormControlFile1"  />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary" type="submit">Sbumit</Button> 
                        </Form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button type="submit" variant="primary" style={{textAligin:"centre",marginLeft:"auto",marginRight:"auto"}}>Submit</Button>   
                    </Modal.Footer> */}
                </Modal>    
                
            </Container>
        </Layout>
    )
}

export default Product
