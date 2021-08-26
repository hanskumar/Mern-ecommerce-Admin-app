import React,{useEffect} from 'react'
import Layout from '../../components/Layout'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsByCategory } from '../../actions'
import {Link} from 'react-router-dom'
import './style.css'

const ProductListPage = (props) => {

    const dispatch = useDispatch();
    const product  = useSelector(state=>state.product);

    console.log(product);

    useEffect(() => {
        dispatch(getProductsByCategory(props.match.params.slug))
    }, [])


    return (
        <Layout>
            <div style={{textAlign:'left',padding: '13px'}}>Samsung Mobile Phones</div>
            {
                Object.keys(product.productByPrice).map((key,index)=>{
                    //console.log(key);
                  return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>Samsung Mobile {key}</div>
                                <button className="viewall">View All</button>
                            </div>
                            <div style={{display:'flex'}}>
                                {
                                    product.productByPrice[key].map(product=>
                                        <Link to={`/${product.slug}/${product._id}/p`}  style={{
                                            display: "block",
                                            textDecoration: "none",
                                            color: "#000",
                                          }} className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={ product.productImages[0]} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: "10px 0" }}>{ product.name}</div>
                                                <div>
                                                    <span>5.6&nbsp;&nbsp;  </span>
                                                    <span style={{ color: "#777",fontWeight: "500",fontSize: "12px"}}>(3353)</span>
                                                </div>
                                                <div className="productPrice"> { product.price}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                                
                            </div>
                        </div>  
                  );
                })
            }
        </Layout>
    )
}

export default ProductListPage
