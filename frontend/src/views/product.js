import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProductData } from '../Store/redux/slices/productSlice';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
const Product = () => {
    const productData = useSelector((state) => state.productSlice.productData);
    const dispatch = useDispatch()
    const product_id = useParams().id
    useEffect(() => {
        dispatch(getProductData({ id: product_id }))
    }, [dispatch]);

    var img_geter = (id) => {
        return ['1.jpg', '2.jpg', '3.jpg', '4.jpg',]
    }
    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col sm={7}>
                        <Carousel>
                            {img_geter().map((img) => {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block"
                                            src={require(`../Store/img/products/${product_id}/${img}`)}
                                            alt=""
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>













                    </Col>
                    <Col>
                        <div>
                            <div className='productDetails'>
                                <h5>
                                    {productData.name}
                                </h5>
                                <span className='productPrice'>
                                    ${productData.price}
                                </span>
                                <b>{productData.count} IN STOCK</b>
                                <p>
                                    {productData.description}
                                </p>
                            </div>
                            <div className="productActions">
                                <div>
                                    <label htmlFor="counter" >QTY :</label>
                                    <input id='counter' type="number" min={1} max={productData.count} className='w-100 form-control' />
                                    <button className='btn_eff mt-2 w-100'>
                                        <BsFillCartFill />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Product;
