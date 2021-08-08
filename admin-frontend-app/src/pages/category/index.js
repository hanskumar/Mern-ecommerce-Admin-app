import React,{useState,useEffect} from 'react'
import Layout from '../../components/layout'
import {Container,Row,Col,Button,Modal,Form,Table} from 'react-bootstrap'
import {getAllCategory,addCategory} from '../../actions'
import {useDispatch,useSelector} from 'react-redux'

import { IoIosAddCircle } from "react-icons/io";


const Category = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categoryName,setCategoryName] = useState();
    const [parentCategory,setParentCategory] = useState();
    const [categoryImage,setCategoryImage] = useState();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    //console.log(categories.categories);

    const SubmitHandler = (e) =>{
        e.preventDefault();
        alert("alert");

        const categoryData = {name:categoryName,parentId:parentCategory}
        console.log(categoryData);
        dispatch(addCategory(categoryData));
        setShow(false);
    }


    return (
        <Layout sidebar>
            
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category List:</h3>
                            <div className="actionBtnContainer">
                                
                                <button onClick={handleShow}> <IoIosAddCircle/><span>Add</span></button>
                            
                            </div>
                        </div>
                    </Col>
                </Row>
                

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>Category Slug</th>
                            <th>Category Image</th>
                            <th>Parent Category</th>
                        </tr>
                    </thead>
                    <tbody>
                       { categories.categories.map((item, index) => 
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.slug}</td>
                                <td>{item.name}</td>
                                <td>{item.parentId ? item.parentId.name:''}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                       <Form onSubmit={SubmitHandler}>  

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Category Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category Name" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Parent Category</Form.Label>
                                <Form.Control as="select" value={parentCategory} onChange={(e)=>setParentCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    { categories.categories.map((item, index) => <option value={item._id} key={item._id}>{item.name}</option>)} 
                                    
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{float:'left'}}>Category Image</Form.Label>
                                <Form.File id="exampleFormControlFile1"  />
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

export default Category
